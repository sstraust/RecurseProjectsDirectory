(ns rcprojectsdir.backups
  (:require [rcprojectsdir.database :refer [db-spec]]
            [environ.core :refer [env]]
            [clojure.java.shell :refer [sh]])
  (:import [java.nio.file Files]
           [java.nio.file.attribute FileAttribute]))

(defn run-backup [& args]
  (when (not (and (env :backup-repo-token)
                  (env :backup-repo-url)))
    (throw (ex-info "env variables not set" {})))
  (let [auth-url (str "https://"
                      (env :backup-repo-token) "@"
                      (env :backup-repo-url))
        temp-dir (str (Files/createTempDirectory "pg-backup-" (make-array FileAttribute 0)))]
    (sh "git" "clone" "--depth" "1" auth-url temp-dir)
    (sh "pg_dump"
        "-h" (:host db-spec)
        "-p" (str (:port db-spec))
        "-U" (:user db-spec)
        (:dbname db-spec)
        "-f" (str temp-dir "/db_dump.sql"))
    (sh "git" "-C" temp-dir "add" "-A")
    (when-not (zero? (:exit (sh "git" "-C" temp-dir "diff" "--cached" "--quiet")))
      (sh "git" "-C" temp-dir "commit" "-m" (str "backup " (java.time.LocalDateTime/now)))
      (sh "git" "-C" temp-dir "push" "origin" "backups"))))

;; (run-backup)
