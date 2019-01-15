var fetch = require("node-fetch"); // note: this is necessary to use 'fetch' in node

/* 
  One last step: if you check the baseEndpoint from the previous exercise, you can see that 'Manchester'
  was hardcoded as location...It would be nice to be able to specify the location as an argument to the function!

  The query "https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=255d97c403d96b4642be1ff79ecddbfc"
  is composed by 2 parts: the base path "https://api.openweathermap.org/data/2.5/weather" and then 2 parameters
  sets of parameters passed after a "?", and separated by a "&": "q=Manchester" and "appid=255d97c403d96b4642be1ff79ecddbfc".

  Update your 'fetchRealWeatherData' function to take a 'location' parameter and use it to build up the full query string
  alongside the provided "basePath" and "apiKey" values. Remember to add the "?" and "&" separators!
*/
var apiKey = "255d97c403d96b4642be1ff79ecddbfc";
var basePath = "https://api.openweathermap.org/data/2.5/weather";

function fetchRealWeatherData(location) {
  // implement
}

// result
// fetchRealWeatherData("Bologna");

module.exports = fetchRealWeatherData;
