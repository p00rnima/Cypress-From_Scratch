@login
Feature: lichess login
  As a lichess user
  I want to login to the platform
  So that I can utilise platform features

  Scenario: Successful login as lichess user
    Given the user navigates to lichess home page
    When the user clicks login
    And lands on login page
    And on logging in as a user
    Then user can validate logged in state