Feature: Testing site

Scenario: Test Home Page and New cars page
Given I am on landing page
When I follow "New Cars"
Then I should see "Ford" in the tag "button"
Then I should see "suzuki" on an element with xpath "//*[@id='root']/div/div/div/a"



