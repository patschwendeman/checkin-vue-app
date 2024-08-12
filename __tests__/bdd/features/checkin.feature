Feature: Check-in

Scenario: I enter a correct visitor number to check in
    Given I am on the visitor number screen
    When I enter a correct visitor number
    And I click the check-in button
    Then I proceed to the next screen

