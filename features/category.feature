Feature: Category data

  Scenario: Add Category
    Given I am on the create category page
    When I enter new category with name and description
    Then I see created successfully message

  Scenario: Delete Category
    Given I am on the category page
    When I click delete dropdown button
    Then I see deleted successfully message
