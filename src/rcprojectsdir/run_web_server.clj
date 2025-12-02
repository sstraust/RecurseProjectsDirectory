(ns rcprojectsdir.run-web-server
  (:require
   [clojure.data.json :as json]
   [clojure.java.jdbc :as jdbc]
   [clojure.string :as str]
   [compojure.core :refer [defroutes GET POST]]
   [easyreagentserver.core :as er-server]
   [environ.core :refer [env]]
   [hiccup.page :refer [html5 include-css include-js]]
   [libpython-clj2.python :as py]
   [libpython-clj2.require :refer [require-python]]
   [ring.util.response :as response]))

(require-python '[requests_oauthlib :refer [OAuth2Session]])
(require-python 'os)
(require-python '[json :as py-json])


(def recurse-auth-url "https://www.recurse.com/oauth/authorize")
(def recurse-token-url "https://www.recurse.com/oauth/token")
(def recurse-handle-auth-redirect-url "http://localhost:8001/handleRedirectResponse")


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
        update_text TEXT NOT NULL,
        author INTEGER NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        FOREIGN KEY (project_id) REFERENCES projects(id),
        FOREIGN KEY (author) REFERENCES users(id)
      );"]))

(defn migrate-v2 []
  (jdbc/execute!
   db-spec 
   ["ALTER TABLE users ADD COLUMN IF NOT EXISTS recurse_id INTEGER UNIQUE;"]))

(defn migrate-v3 []
  (jdbc/execute! db-spec
    ["DROP MATERIALIZED VIEW IF EXISTS project_search CASCADE"])
  (jdbc/execute!
   db-spec
   ["CREATE MATERIALIZED VIEW project_search AS
SELECT 
  p.id,
  p.name,
  p.description,
  a.name AS author_name,
  setweight(to_tsvector('simple', COALESCE(p.name, '')), 'A') ||
  setweight(to_tsvector('simple', COALESCE(a.name, '')), 'B') ||
  setweight(to_tsvector('simple', COALESCE(p.description, '')), 'C') AS search_vector
FROM projects p
LEFT JOIN users a ON p.author = a.id;

CREATE INDEX idx_project_search_fts ON project_search USING GIN (search_vector);

-- Refresh when data changes:
REFRESH MATERIALIZED VIEW project_search;

-- Or refresh concurrently (non-blocking, requires unique index):
CREATE UNIQUE INDEX idx_project_search_id ON project_search (id);
REFRESH MATERIALIZED VIEW CONCURRENTLY project_search;
"]))


   




#_(jdbc/execute!
 db-spec
 ["INSERT INTO  test_table (id, description) VALUES (?, ?)" 12 "hi"])

#_(jdbc/query
 db-spec
 ["SELECT * FROM test_table"])

#_(jdbc/execute!
   db-spec
   ["INSERT INTO users (id, name) VALUES (?, ?)" 2 "test"])

#_(jdbc/execute!
   db-spec
   ["DROP TABLE  project_updates CASCADE"])
#_(jdbc/execute!
   db-spec
   ["DROP TABLE  project_search CASCADE"])
;; (create-user-if-not-exists {:name "test" :id 123})



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
          parsed-response (medley.core/map-keys keyword (into {} (py-json/loads (py/py.- user-info content))))]
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
    (str "

<link href=\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap\" rel=\"stylesheet\">")
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
  "HTTP handler: return projects for current user-id"
  [request]
  (let [user-id  (:db_id (:session request))
        users-projects (jdbc/query db-spec
                             ["SELECT * FROM projects WHERE author = ?" user-id])]
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (json/write-str {:users-projects users-projects})}))

(defn get-all-projects
  "HTTP handler: return all projects"
  [_request]
  (let [all-projects (jdbc/query db-spec
                             ["SELECT * FROM projects"])]
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (json/write-str {:all-projects all-projects})}))

(declare create-update)
(defn create-project!
  "Create a new project row for the given user id."
  [user-id project-name description]
  (jdbc/insert!
   db-spec
   :projects
   {:name project-name
    :description description
    :author user-id}))

(defn create-project [request]
  (let [project-description (get-in request [:params :project-description])
        project-name        (get-in request [:params :project-name])
        user-id             (:db_id (:session request))]
    (try
      (if (and (string? project-description)
                (string? project-name)
                (not (clojure.string/blank? project-name)))
        (if-let [result (first (create-project! user-id project-name project-description))]
          (do (create-update {:params {:project-id (:id result)
                                       :update-contents (str "New project created: " project-description)}})
              {:status  200
               :headers {"Content-Type" "application/json"}
               :body    (json/write-str {:ok true
                                         :project-id (:id result)})})
          (do (println "failed to create project")
          {:status  500
           :headers  {"Content-Type" "text/plain"}
           :body    "failed to create project"}))
        (do
          (println "invalid project name")
          {:status  500
        :headers  {"Content-Type" "text/plain"}
         :body    "invalid project name"}))
      (catch Exception e
        (println e)
        {:status  500
        :headers  {"Content-Type" "text/plain"}
         :body    "Failed to create project"}))))
          
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


(defn create-update [{{:keys [project-id update-contents]} :params :as params}]
  (if-not (= (:status (get-project-details params)) 200)
    (get-project-details params)
    (if-not (first (jdbc/query db-spec ["SELECT 1 FROM projects WHERE author = ? AND id = ? LIMIT 1"
                               (:db_id (:session params)) (Integer/parseInt project-id)]))
      {:status 500
       :headers {"Content-Type" "text/plain"}
       :body "Failed to find this project owned by user"}
      (if-let [db-result (jdbc/insert!
                       db-spec
                       :project_updates
                       {:update_text (str update-contents)
                        :project_id (Integer/parseInt project-id)
                        :author (:db_id (:session params))})]
        {:status 200
         :headers {"Content-Type" "application/json"}
         :body    (json/write-str {:ok true
                                   :update-id (:id db-result)})}
        {:status 500
         :headers {"Content-Type" "text/plain"}
         :body "Failed to insert"}))))

(defn get-updates-list [params]
  (er-server/json-response
   {:updates-list (jdbc/query
              db-spec
              ["SELECT update_text, a.name AS author_name, b.name AS project_name
     FROM project_updates u
     JOIN users a
     ON u.author = a.id
     JOIN projects b
     ON u.project_id = b.id"])}))



(defn search-remove-special-chars
  [input]
  (-> (or input "")
      (str/replace #"[&|!():*<>']" " ")  ; remove operators
      str/trim))

(defn str-to-search-query
  [input]
  (->> (str/split (search-remove-special-chars input) #"\s+")
       (remove str/blank?)
       (map #(str % ":*"))
       (str/join " & ")))


;; TODO add malli validation so we can ensure that this matches the same
;; schema as getallprojects
(defn search-projects [{{:keys [search-str]} :params}]
  (def zz search-str)
  (er-server/json-response
   {:all-projects 
   (let [search-query (str-to-search-query search-str)]
    (when-not (str/blank? search-query)
      (jdbc/query db-spec
        ["SELECT id, name, description,
                 ts_rank(search_vector, to_tsquery('simple', ?)) AS rank
          FROM project_search
          WHERE search_vector @@ to_tsquery('simple', ?)
          ORDER BY rank DESC
          LIMIT ?"
         search-query search-query 100])))}))

  

(defn get-curr-user-info [params]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/write-str (select-keys (:session params) [:id :name]))})

(defn login-redirect [handler]
  (fn [request]
    (if (get-in request [:session :recurse_id])
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
  (GET "/getAllProjects" params (get-all-projects params))
  (POST "/newProject" params (create-project params))
  (POST "/createUpdate" params (create-update params))
  (GET "/getUpdatesList" params (get-updates-list params))
  (POST "/searchProjects" params (search-projects params)))
  


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
  (migrate-v2)
  (migrate-v3)
  (er-server/run-web-server
   "rcprojectsdirjs" all-routes
   {:port 8001
    :join? false
    :headerBufferSize 1048576}))


;; (run-web-server :dev)
;; (jdbc/query db-spec ["SELECT * FROM updates"])({:id 1, :update_text "test", :project_id 22, :author 17, :created_at #inst "2025-11-25T19:00:07.041901000-00:00"} {:id 2, :update_text "test update", :project_id 22, :author 17, :created_at #inst "2025-11-25T19:00:42.687783000-00:00"} {:id 3, :update_text "test", :project_id 34, :author 17, :created_at #inst "2025-11-25T19:14:25.544164000-00:00"} {:id 4, :update_text "my test update!!", :project_id 26, :author 17, :created_at #inst "2025-11-25T19:18:07.494845000-00:00"})




