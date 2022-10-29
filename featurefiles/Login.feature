#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: Tohttps://marketplace.eclipse.org/content/natural observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tagshttps://marketplace.eclipse.org/content/natural/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Login orange HRM
  Scenario: Login of OrangeHRM
    Given user enters url of the page
    When credentials are given
    |Admin | admin123 |
    And clicks the submit button 
    Then loged in to the website
    
    
    
    
   
    
    
    
    
    