(ns rcprojectsdir.run-web-server
  (:require
   [clojure.data.json :as json]
   [clojure.java.jdbc :as jdbc]
   [compojure.core :refer [defroutes GET POST]]
   [easyreagentserver.core :as er-server]
   [ring.util.response :as response]
   [environ.core :refer [env]]
   [hiccup.page :refer [html5 include-css include-js]]
   [libpython-clj2.python :as py]
   [libpython-clj2.require :refer [require-python]]))

(require-python '[requests_oauthlib :refer [OAuth2Session]])
(require-python 'os)
(require-python '[json :as py-json])


(def recurse-auth-url "https://www.recurse.com/oauth/authorize")
(def recurse-token-url "https://www.recurse.com/oauth/token")
(def recurse-handle-auth-redirect-url "http://localhost:8001/handleRedirectResponse")

(def fake-user-id 2)


(def db-spec
  {:dbtype "postgresql"
   :dbname (env :postgres-db "rcprojectsdir")
   :host (env :postgres-host "localhost")
   :port (env :postgres-port 5432)
   :user (env :postgres-user "myuser")
   :password (env :postgres-password "mypass")})

(comment 
(jdbc/execute!
 db-spec
 ["CREATE TABLE IF NOT EXISTS test_table (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL)"]))

(defn migrate-v1 []
  (jdbc/execute!
    db-spec
    ["CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        author INTEGER NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        FOREIGN KEY (author) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS project_updates (
        id SERIAL PRIMARY KEY,
        project_id INTEGER NOT NULL,
        description TEXT NOT NULL,
        author INTEGER NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        FOREIGN KEY (project_id) REFERENCES projects(id),
        FOREIGN KEY (author) REFERENCES users(id)
      );"]))


#_(jdbc/execute!
 db-spec
 ["INSERT INTO  test_table (id, description) VALUES (?, ?)" 12 "hi"])

#_(jdbc/query
 db-spec
 ["SELECT * FROM test_table"])

#_(jdbc/execute!
   db-spec
   ["INSERT INTO users (id, name) VALUES (?, ?)" 2 "test"])


(defn redirect-to-oauth []
  (let [oauth-obj (requests_oauthlib/OAuth2Session (:recurse-client-id env)  :redirect_uri recurse-handle-auth-redirect-url)]
    (response/redirect (first (py/py. oauth-obj authorization_url
                                recurse-auth-url)))))

(defn handle-redirect-response [params]
  (let [response-url (str (if (= :dev @er-server/MODE) "http://" "https://")
                          (get-in params [:headers "host"]) "/" (get params :uri) "?" (get params :query-string))
        authorizer (requests_oauthlib/OAuth2Session (:recurse-client-id env)  :redirect_uri recurse-handle-auth-redirect-url)]
    (py/py. authorizer fetch_token
            recurse-token-url
            :client_secret (:recurse-client-secret env)
            :authorization_response response-url)
    (let [user-info (py/py. authorizer get "https://www.recurse.com/api/v1/profiles/me")
          parsed-response (medley.core/map-keys keyword (into {} (py-json/loads (py/py.- user-info content))))]
      ;; TODO create a database user if one does not already exist
      (assoc
       (response/redirect "/")
       :session (select-keys parsed-response [:name :id])))))



(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (str "<script>mode=" (json/write-str @er-server/MODE) "</script>")
   (include-css (str "/resources/global_output.css?v=" (rand-int 100000)))])

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    [:div {:id "main-app"}]
    (include-js "/resources/reload_css.js")
    (include-js "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js")
    (if (= @er-server/MODE :dev)
      (include-js  (str "/out/main.js?v=" (rand-int 100000)))
      (include-js "/prod_js/main.js"))]))

(defn get-main-page [params]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})

(defn get-users-projects
  "HTTP handler: return projects for current user-id (hardcoded)"
  [request]
  (let [user-id  fake-user-id
        projects (jdbc/query db-spec
                             ["SELECT * FROM projects WHERE author = ?" user-id])]
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (json/write-str {:projects projects})}))

(defn create-project!
  "Create a new project row for the given user id."
  [user-id name description]
  (jdbc/execute!
    db-spec
    ["INSERT INTO projects (name, description, author)
      VALUES (?, ?, ?)"
     name description user-id]))

(defn create-project [request]
  (let [project-description (get-in request [:params :project-description])
        project-name        (get-in request [:params :project-name])
        ;; TODO: replace with logged-in user id
        user-id             fake-user-id]
    (try
      (when (and (string? project-description)
                (string? project-name)
                (not (clojure.string/blank? project-name)))
        (create-project! user-id project-name project-description))
      {:status  200
      :headers {"Content-Type" "application/json"}
      :body    (json/write-str {:ok true})}
      
      (catch Exception e
        (println e)
        {:status  500
        :headers  {"Content-Type" "application/json"}
        :body     (json/write-str {:ok  false
                                  :error "Failed to create project"})}))))



;; use keyword destructuring to access params
(defn get-project-details [{{:keys [project-id]} :params}]
  (let [query-result (first
                      (jdbc/query
                       db-spec
                       ["SELECT name, description, author FROM projects WHERE id = ? LIMIT 1"
                        (Integer/parseInt project-id)]))]
    (if query-result 
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/write-str query-result)}
      {:status 500
       :headers {"Content-Type" "text/plain"}
       :body "Failed to Fetch Project"})))





(defn edit-project [{{:keys [project-id updates]} :params}]
  (let [edit-result (jdbc/execute!
                     db-spec
                     ["UPDATE projects
                       SET
                         name = COALESCE(?, name),
                         description = COALESCE(?, description)
                       WHERE id = ?
                       RETURNING name, description, author;"
                      (:name updates)
                      (:description updates)
                      (Integer/parseInt project-id)])]
    (if edit-result
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/write-str (first edit-result))}
      {:status 500
       :headers {"Content-Type" "text/plain"}
       :body "Failed to Edit Project"})))


(defn get-curr-user-info [params]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/write-str (select-keys (:session params) [:id :name]))})



(defn login-redirect [handler]
  (fn [request]
    (if (get-in request [:session :id])
      ;; TODO also check that the user exists in the database
      (handler request)
      (response/redirect "/redirect"))))
  


(defroutes public-routes
  (GET "/redirect" params (redirect-to-oauth))
  (GET "/handleRedirectResponse" params (handle-redirect-response params)))


(defroutes private-routes
  (GET "/" params (get-main-page params))
  (GET "/currUserInfo" params (get-curr-user-info params))
  ;; use frontend routing for requests
  (GET "/reviewProjectPage" params (get-main-page params))
  (GET "/getProjectDetails" params (get-project-details params))
  (POST "/editProject" params (edit-project params))
  (GET "/getUsersProjects" params (get-users-projects params))  
  (POST "/newProject" params (create-project params)))
  


(def all-routes
  (compojure.core/routes
   public-routes
   (compojure.core/wrap-routes
    private-routes
    login-redirect)))
  

(defn run-web-server [input-mode]
  (when input-mode (reset! er-server/MODE input-mode))
  (when (= input-mode :dev)
    (py/py. os/environ __setitem__ "OAUTHLIB_INSECURE_TRANSPORT" "1"))
  (migrate-v1)
  (er-server/run-web-server
   "rcprojectsdirjs" all-routes
   {:port 8001
    :join? false
    :headerBufferSize 1048576}))


;; (run-web-server :dev)
