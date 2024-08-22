Feature: Check-out

Scenario: I successfully check out with a correct visitor number
    Given I clicked on the checkout button
    And I am on the visitor number screen
    When I enter a correct visitor number
    And I click on the checkout button
    Then I am taken to the end screen

Scenario: I fail to check out with an incorrect visitor number
    Given I clicked on the checkout button
    And I am on the visitor number screen
    When I enter an incorrect visitor number
    And I click on the checkout button
    Then I receive feedback that the checkout failed