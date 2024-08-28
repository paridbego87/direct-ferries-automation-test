Feature: Direct Ferries homepage

    Scenario: DE Popular operators appear
        Given I am on the ".de" homepage
        Then I see popular operators

    Scenario: DE Top destinations appear
        Given I am on the ".de" homepage
        Then I see top destinations

    Scenario: DE Latest offers appear
        Given I am on the ".de" homepage
        Then I see latest offers

    Scenario: UK Popular operators appear
        Given I am on the ".co.uk" homepage
        Then I see popular operators

    Scenario: UK Top destinations appear
        Given I am on the ".co.uk" homepage
        Then I see top destinations

    Scenario: UK Latest offers appear
        Given I am on the ".co.uk" homepage
        Then I see latest offers

    Scenario: IT Popular operators appear
        Given I am on the ".it" homepage
        Then I see popular operators

    Scenario: IT Top destinations appear
        Given I am on the ".it" homepage
        Then I see top destinations

    Scenario: IT Latest offers appear
        Given I am on the ".it" homepage
        Then I see latest offers