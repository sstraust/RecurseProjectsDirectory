(ns rcprojectsdir.fixtures.setup-postgres-fixture
  (:require
   [clojure.java.jdbc :as jdbc]
   [rcprojectsdir.database :as database :refer [db-spec]])
  (:import
   [com.opentable.db.postgres.embedded EmbeddedPostgres]))



(defn with-embedded-postgres-fixture [f]
  (let [embedded-postgres (-> (EmbeddedPostgres/builder)
                              (.start))
        ;; Connect to default postgres db first to create our test db
        admin-db-spec {:dbtype "postgresql"
                       :dbname "postgres"
                       :host (.getHost embedded-postgres)
                       :port (.getPort embedded-postgres)
                       :user "postgres"
                       :password "postgres"}
        embedded-db-spec {:dbtype "postgresql"
                          :dbname "rcprojectsdir_test"
                          :host (.getHost embedded-postgres)
                          :port (.getPort embedded-postgres)
                          :user "postgres"
                          :password "postgres"}]
    (try
      ;; Create the database using raw JDBC (outside of a transaction)
      (with-open [conn (jdbc/get-connection admin-db-spec)
                  stmt (.createStatement conn)]
        (.setAutoCommit conn true)
        (.execute stmt "CREATE DATABASE rcprojectsdir_test"))
      
      (with-redefs [db-spec embedded-db-spec]
        (database/database-migrations)
        (f))
      (finally
        (.close embedded-postgres)))))

