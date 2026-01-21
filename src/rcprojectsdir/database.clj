(ns rcprojectsdir.database
  (:require [environ.core :refer [env]]
            [clojure.java.jdbc :as jdbc]))


(defn parse-database-url [url]
  (let [uri (java.net.URI. url)
        [user password] (clojure.string/split (.getUserInfo uri) #":" 2)]
    {:dbtype   "postgresql"
     :host     (.getHost uri)
     :port     (if (pos? (.getPort uri)) (.getPort uri) 5432)
     :dbname   (subs (.getPath uri) 1)  ;; remove leading "/"
     :user     user
     :password password}))

(def db-spec
  (if-let [db-url (System/getenv "DATABASE_URL")]
    (parse-database-url db-url)
    {:dbtype   "postgresql"
     :dbname   (env :postgres-db "rcprojectsdir")
     :host     (env :postgres-host "localhost")
     :port     (env :postgres-port 5432)
     :user     (env :postgres-user "myuser")
     :password (env :postgres-password "mypass")}))

;; (def db-spec
;;   {:dbtype "postgresql"
;;    :dbname (env :postgres-db "rcprojectsdir")
;;    :host (env :postgres-host "localhost")
;;    :port (env :postgres-port 5432)
;;    :user (env :postgres-user "myuser")
;;    :password (env :postgres-password "mypass")})


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

(defn migrate-v4 []
  (jdbc/execute!
   db-spec
   ["ALTER TABLE users ADD COLUMN IF NOT EXISTS is_new_user BOOLEAN NOT NULL DEFAULT TRUE"]))



(defn migrate-v5 []
  (jdbc/execute!
   db-spec
   ["ALTER TABLE projects ADD COLUMN IF NOT EXISTS project_links TEXT[] DEFAULT '{}';"])

  (jdbc/execute!
   db-spec
   ["CREATE TABLE IF NOT EXISTS project_images (
      id SERIAL PRIMARY KEY,
      project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
      file_path TEXT NOT NULL
    )"]))

(defn migrate-v6 []
  (jdbc/execute!
   db-spec
   ["ALTER TABLE projects ADD COLUMN IF NOT EXISTS is_live BOOLEAN DEFAULT FALSE;"]))


(defn migrate-v7 []
  (jdbc/execute!
   db-spec
   ["ALTER TABLE project_updates
     ADD COLUMN IF NOT EXISTS event_type TEXT NOT NULL DEFAULT 'update';"]))


(defn database-migrations []
  (migrate-v1)
  (migrate-v2)
  (migrate-v3)
  (migrate-v4)
  (migrate-v5)
  (migrate-v6)
  (migrate-v7))

;; (database-migrations)



#_(do (jdbc/execute!
       db-spec
       ["ALTER TABLE users DROP COLUMN is_new_user"])
      (migrate-v4))



#_(jdbc/query
   db-spec
   ["SELECT * FROM projects"])


#_(jdbc/query
   db-spec
   ["SELECT * FROM users"])


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
   ["DROP TABLE  projects CASCADE"])
#_(jdbc/execute!
   db-spec
   ["DROP TABLE  project_search CASCADE"])
;; (create-user-if-not-exists {:name "test" :id 123})


