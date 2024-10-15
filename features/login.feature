Feature: Login functionality

  Scenario: Login with invalid credentials
    Given I am on the login page
    When I login with <email> and <password>
    Then I should see <message> alert message

    Examples:
      | email               | password  | message                            |
      | xxxx                | xxxx      | "email" must be a valid email      |

  Scenario: Login with valid credentials
    Given I am on the login page
    When I login with <email> and <password>
    Then I should be redirected to <page> page

    Examples:
      | email             | password  | page      |
      | fadhil@gmail.com  | fadhil123 | dashboard |
