var fetch = require("node-fetch"); // note: this is necessary to use 'fetch' in node

/* 
  Bonus exercise! the API basePath we've been using so far returns a data structure with the
  current weather. Why don't you implement the logic to fetch and display the forecast for the future?

  Head over to https://openweathermap.org/api and select an endpoint that you like (the 16 days forecast for example)
  and write a fetchForecast function to display data.

  The specification is up to you: should the function accept a location and maybe the number of days in the future, or maybe
  accept nothing and return a random location/forecast each time is called, or something else? There is no test for this
  exercise so feel free to experiment to your content. Remember to commit!
*/
var apiKey = "255d97c403d96b4642be1ff79ecddbfc";

function fetchForecast() {
}

fetchForecast();
