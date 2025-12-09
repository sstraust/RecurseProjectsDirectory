(ns rcprojectsdir.oauth
  (:require [compojure.core :refer [defroutes GET POST]]
            [libpython-clj2.python :as py]
            [environ.core :refer [env]]
            [medley.core :as medley]
            [ring.util.response :as response]
            [clojure.java.jdbc :as jdbc]
            [rcprojectsdir.database :as database :refer [db-spec]]
            [easyreagentserver.core :as er-server]
            [libpython-clj2.require :refer [require-python]]))


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
        {:status 500
         :headers {"Content-Type" "text/plain"}
         :body "Failed to Fetch Project"}
        (do
          (let [db-result (create-user-if-not-exists parsed-response)]
            (if (not db-result)
              {:status 500
               :headers {"Content-Type" "text/plain"}
               :body "Failed to fetch user in database"}
              (assoc
               (response/redirect "/")
               :session
               {:name (:name parsed-response)
                :db_id (:id db-result)
                :recurse_id (:id parsed-response)}))))))))

(defroutes public-routes
  (GET "/redirect" params (redirect-to-oauth))
  (GET "/handleRedirectResponse" params (handle-redirect-response params)))

