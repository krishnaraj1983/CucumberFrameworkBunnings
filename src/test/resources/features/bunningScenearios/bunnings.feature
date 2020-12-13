Feature: Verify Newly rolled out search and results features on Bunnings Website

Scenario: verify user is able to search an available service and make sure that results are returned properly
    Given User navigate to the Bunning website
    When User enter the text "TV Antenna Installation" in the search
    And User submit the search
    Then User taken to the search results page
    And verify other tab is active
    And Verify the service results are correct as per the search
    
  Scenario: verify user is able to search an available product results and make sure that results are returned properly
    Given User navigate to the Bunning website
    When User enter the text "tv antennas" in the search
    And User submit the search
    Then User taken to the search results page
    And verify our range tab is active
    And Verify the product results are correct as per the search
    
 Scenario: verify user is able to search an available DIY Advice results and make sure that results are returned properly
    Given User navigate to the Bunning website
    When User enter the text "garden diaries" in the search
    And User submit the search
    Then User taken to the search results page
    And verify D.I.Y. Advice tab is active
    And Verify the DIY Advice results are correct as per the search
