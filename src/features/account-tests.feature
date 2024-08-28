Feature: Account Page

    Scenario: Incorrect login details
        Given I am on the account page
        Then I see the login form
        Then I input incorrect login details
        Then I see a booking reference error