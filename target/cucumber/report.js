$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bunnings.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Newly rolled out search and results features on Bunnings Website",
  "description": "",
  "id": "verify-newly-rolled-out-search-and-results-features-on-bunnings-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8284731800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify user is able to search an available service and make sure that results are returned properly",
  "description": "",
  "id": "verify-newly-rolled-out-search-and-results-features-on-bunnings-website;verify-user-is-able-to-search-an-available-service-and-make-sure-that-results-are-returned-properly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User navigate to the Bunning website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the text \"TV Antenna Installation\" in the search",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User submit the search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User taken to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify other tab is active",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the service results are correct as per the search",
  "keyword": "And "
});
formatter.match({
  "location": "BunningsStepDefinitions.user_navigates_to_Bunning_website()"
});
formatter.result({
  "duration": 14329695200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TV Antenna Installation",
      "offset": 21
    }
  ],
  "location": "BunningsStepDefinitions.homePageHeading(String)"
});
formatter.result({
  "duration": 1357406900,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.user_clicks_on_the_Search_button()"
});
formatter.result({
  "duration": 3191769600,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.searchResultsPage()"
});
formatter.result({
  "duration": 394273900,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.ourotherTab_active()"
});
formatter.result({
  "duration": 101406000,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.serviceSearch_Results()"
});
formatter.result({
  "duration": 353157201,
  "status": "passed"
});
formatter.after({
  "duration": 3129064499,
  "status": "passed"
});
formatter.before({
  "duration": 5506153000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify user is able to search an available product results and make sure that results are returned properly",
  "description": "",
  "id": "verify-newly-rolled-out-search-and-results-features-on-bunnings-website;verify-user-is-able-to-search-an-available-product-results-and-make-sure-that-results-are-returned-properly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User navigate to the Bunning website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enter the text \"tv antennas\" in the search",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User submit the search",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User taken to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify our range tab is active",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the product results are correct as per the search",
  "keyword": "And "
});
formatter.match({
  "location": "BunningsStepDefinitions.user_navigates_to_Bunning_website()"
});
formatter.result({
  "duration": 12495804100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tv antennas",
      "offset": 21
    }
  ],
  "location": "BunningsStepDefinitions.homePageHeading(String)"
});
formatter.result({
  "duration": 1492516699,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.user_clicks_on_the_Search_button()"
});
formatter.result({
  "duration": 4167321900,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.searchResultsPage()"
});
formatter.result({
  "duration": 808897700,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.ourRangeTab_active()"
});
formatter.result({
  "duration": 100766000,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.Search_Results()"
});
formatter.result({
  "duration": 265258900,
  "status": "passed"
});
formatter.after({
  "duration": 2315390100,
  "status": "passed"
});
formatter.before({
  "duration": 5101605700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify user is able to search an available DIY Advice results and make sure that results are returned properly",
  "description": "",
  "id": "verify-newly-rolled-out-search-and-results-features-on-bunnings-website;verify-user-is-able-to-search-an-available-diy-advice-results-and-make-sure-that-results-are-returned-properly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User navigate to the Bunning website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enter the text \"garden diaries\" in the search",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User submit the search",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User taken to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "verify D.I.Y. Advice tab is active",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the DIY Advice results are correct as per the search",
  "keyword": "And "
});
formatter.match({
  "location": "BunningsStepDefinitions.user_navigates_to_Bunning_website()"
});
formatter.result({
  "duration": 16305272401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "garden diaries",
      "offset": 21
    }
  ],
  "location": "BunningsStepDefinitions.homePageHeading(String)"
});
formatter.result({
  "duration": 690199400,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.user_clicks_on_the_Search_button()"
});
formatter.result({
  "duration": 2966939100,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.searchResultsPage()"
});
formatter.result({
  "duration": 276113100,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.ourDIYAdviceTab_active()"
});
formatter.result({
  "duration": 74109800,
  "status": "passed"
});
formatter.match({
  "location": "BunningsStepDefinitions.DIY_AdviceSearch_Results()"
});
formatter.result({
  "duration": 454647899,
  "status": "passed"
});
formatter.after({
  "duration": 2571427600,
  "status": "passed"
});
});