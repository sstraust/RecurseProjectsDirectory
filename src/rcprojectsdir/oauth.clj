(ns rcprojectsdir.oauth
  (:require
   [clojure.data.json :as json]
   [clojure.java.jdbc :as jdbc]
   [compojure.core :refer [defroutes GET POST]]
   [easyreagentserver.core :as er-server]
   [environ.core :refer [env]]
   [libpython-clj2.python :as py]
   [libpython-clj2.require :refer [require-python]]
   [medley.core :as medley]
   [rcprojectsdir.database :as database :refer [db-spec]]
   [ring.util.response :as response]))


(require-python '[requests_oauthlib :refer [OAuth2Session]])
(require-python 'os)
(require-python '[json :as py-json])


(def recurse-auth-url "https://www.recurse.com/oauth/authorize")
(def recurse-token-url "https://www.recurse.com/oauth/token")
(def recurse-handle-auth-redirect-url "http://localhost:8001/handleRedirectResponse")



(defn redirect-to-oauth []
  (let [oauth-obj (requests_oauthlib/OAuth2Session (:recurse-client-id env)  :redirect_uri recurse-handle-auth-redirect-url)]
    (response/redirect (first (py/py. oauth-obj authorization_url
                                recurse-auth-url)))))

(defn create-user-if-not-exists [{:keys [name id] :as recurse-info}]
  (first (jdbc/query
   db-spec
   ["INSERT INTO users (name, recurse_id)
     VALUES (?, ?)
     ON CONFLICT (recurse_id)
     DO UPDATE SET recurse_id = EXCLUDED.recurse_id
     RETURNING *"
    name
    id])))
                     


(defn handle-redirect-response [params]
  (let [response-url (str (if (= :dev @er-server/MODE) "http://" "https://")
                          (get-in params [:headers "host"]) "/" (get params :uri) "?" (get params :query-string))
        authorizer (requests_oauthlib/OAuth2Session (:recurse-client-id env)  :redirect_uri recurse-handle-auth-redirect-url)]
    (py/py. authorizer fetch_token
            recurse-token-url
            :client_secret (:recurse-client-secret env)
            :authorization_response response-url)
    (let [user-info (py/py. authorizer get "https://www.recurse.com/api/v1/profiles/me")
          parsed-response (medley/map-keys keyword (into {} (py-json/loads (py/py.- user-info content))))]
      (if (not (and (:name parsed-response)
                    (:id parsed-response)))
        (er-server/failure-response "Failed to Fetch Project")
        (do
          (let [db-result (create-user-if-not-exists parsed-response)]
            (if (not db-result)
              (er-server/failure-response "Failed to fetch user in database")
              (assoc
               (response/redirect "/")
               :session
               {:name (:name parsed-response)
                :db_id (:id db-result)
                :recurse_id (:id parsed-response)}))))))))


(defn get-curr-user-info [params]
  (er-server/json-response (select-keys (:session params) [:id :name])))

(defn login-redirect [handler]
  (fn [request]
    (if (get-in request [:session :recurse_id])
      (handler request)
      (response/redirect "/redirect"))))

(defn mark-new-user-form-as-completed [params]
  (jdbc/execute!
   db-spec
   ["UPDATE users
     SET is_new_user = false
     WHERE id = ?;"
    (:db_id (:session params))]))


(defroutes public-routes
  (GET "/redirect" params (redirect-to-oauth))
  (GET "/handleRedirectResponse" params (handle-redirect-response params)))

(defroutes oauth-private-routes
  (GET "/currUserInfo" params (get-curr-user-info params))
  (POST "/newProjectPageSkip" params (mark-new-user-form-as-completed params)))

