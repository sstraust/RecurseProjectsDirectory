(ns rcprojectsdir.manage-projects-test
  (:require
   [clojure.data.json :as json]
   [clojure.test :refer :all]
   [rcprojectsdir.fixtures.setup-postgres-fixture :as setup-postgres-fixture]
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
     

