(ns rcprojectsdir.manage-projects-test
  (:require
   [clojure.data.json :as json]
   [clojure.test :refer :all]
   [rcprojectsdir.fixtures.setup-postgres-fixture :as setup-postgres-fixture]
   [rcprojectsdir.manage-project-updates :as manage-project-updates]
   [rcprojectsdir.manage-projects :as manage-projects]
   [rcprojectsdir.oauth :as oauth]))

(use-fixtures :each setup-postgres-fixture/with-embedded-postgres-fixture)

(deftest create-project-test
  (testing
      "Test that calling create project creates a project"
    (let [oauth-user (oauth/create-user-if-not-exists {:name "test name"
                                                       :id 123})
          result 
          (manage-projects/create-project
           {:params {:project-description "test-description this is a great project"
                     :project-name "My Project"
                     :project-links ["https://www.myproject.com"]
                     :images nil}
            :session {:db_id (:id oauth-user)}})]
      (is (= 200 (:status result)))
      (println result)
      (is (= 1 (:project-id (json/read-str (:body result) :key-fn keyword))))))
  (testing
      "Test that we can create a project, and then get its details"
    (let [oauth-user (oauth/create-user-if-not-exists {:name "user2"
                                                       :id 3213})
          project-details {:project-description "test-description this is a great project"
                           :project-name "My Project"
                           :project-links ["https://www.myproject.com"]
                           :images nil}
          create-result (manage-projects/create-project
                         {:params project-details
                          :session {:db_id (:id oauth-user)}})
          project-id-str (str (:project-id (json/read-str (:body create-result)
                                                          :key-fn keyword)))
          get-details-result (manage-projects/get-project-details
                              {:params {:project-id project-id-str}})]
      (is (= 200 (:status create-result)))
      (is (= 200 (:status get-details-result)))
      (is (= {:name "My Project"
              :description "test-description this is a great project"
              :author (:id oauth-user)}
             (select-keys (json/read-str (:body get-details-result) :key-fn keyword)
                          [:name :description :author]))))))


(deftest get-all-projects-test
  (testing
      "Test that we can create a project, and it will show up in get-all-projects"
    (let [oauth-user (oauth/create-user-if-not-exists {:name "user2"
                                                       :id 3213})
          result 
          (manage-projects/create-project
           {:params {:project-description "yes this project is fantastic"
                     :project-name "Fun Project"
                     :project-links ["https://www.itsthebest.com"]
                     :images nil}
            :session {:db_id (:id oauth-user)}})
          get-all-projects-result (manage-projects/get-all-projects {})
          projects (:all-projects (json/read-str (:body get-all-projects-result) :key-fn keyword))]
      (is (= 200 (:status get-all-projects-result)))
      (is (= {:id 1
              :name "Fun Project"
              :description "yes this project is fantastic"
              :author (:id oauth-user)
              :author_name "user2"}
             (select-keys (first projects)
                          [:id :name :description :author :author_name])))
      (is (= 1 (count projects)))))
  (testing "Test that we can create a project, and it will show up in get-users-projects"
    (let [oauth-user (oauth/create-user-if-not-exists {:name "user3"
                                                       :id 16161})
          result 
          (manage-projects/create-project
           {:params {:project-description "this is another cool project"
                     :project-name "Just My Project"
                     :project-links ["https://www.itsthebest.com"]
                     :images nil}
            :session {:db_id (:id oauth-user)}})
          get-users-projects-result (manage-projects/get-users-projects
                                   {:session {:db_id (:id oauth-user)}})
          projects (:users-projects (json/read-str (:body get-users-projects-result) :key-fn keyword))]
      (is (= 200 (:status get-users-projects-result)))
      (is (= {:id 2
              :name "Just My Project"
              :description "this is another cool project"
              :author (:id oauth-user)
              :author_name "user3"}
             (select-keys (first projects)
                          [:id :name :description :author :author_name])))
      (is (= 1 (count projects)))))
  (testing "Test that get-all-projects still returns both user's projects"
    (let [get-all-projects-result (manage-projects/get-all-projects {})
          projects (:all-projects (json/read-str (:body get-all-projects-result) :key-fn keyword))]
      (is (= 200 (:status get-all-projects-result)))
      (is (= 2 (count projects))))))


(deftest create-project-creates-update-test
  (testing
      "Test that creating a new project also creates a project update for that project"
    (let [oauth-user (oauth/create-user-if-not-exists {:name "user3"
                                                       :id 16161})
          result 
          (manage-projects/create-project
           {:params {:project-description "this is another cool project"
                     :project-name "Just My Project"
                     :project-links ["https://www.itsthebest.com"]
                     :images nil}
            :session {:db_id (:id oauth-user)}})
          updates (:updates-list
                   (json/read-str
                    (:body (manage-project-updates/get-updates-list {:params {}}))
                    :key-fn keyword))]
      (is (= 1 (count updates)))
      (is (= (:update_text (first updates)) "New project created: this is another cool project")))))
