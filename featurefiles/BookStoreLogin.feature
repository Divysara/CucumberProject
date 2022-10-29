@BookStoreLoginPage
Feature: Book Store login
  Scenario Outline: book store login 
    Given user enters bookstore page
    When "<username>" and "<password>" are given
    |Admin | admin123 |
    And  submit button 
    Then loged in to the account
  Examples:  
    |username|password|
    |divyas94|Password123!|
    |divyas94|password|
    
