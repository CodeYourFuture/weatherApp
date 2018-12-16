var fetch = require("node-fetch"); // note: this is necessary to use 'fetch' in node

/* 
  Time to abandon the 'happy metereologist' story. So far, you create a small program that polls a remote server for
  a JSON object, reads it and convert it in a object with the keys and values you want.

  While the data received so far was static, we can easily change the endpoint we're asking data from to onde from 
  https://api.openweathermap.org. They provide free, real-time forecast for all locations around the world. Since the
  test data you've used so far is modeled after the responses given by this website, all you need to do is to change
  the endPoint to the correct one and provide a valid API key to get real, actual weather.

  Write a function called 'fetchRealWeatherData' that, given the endpoint, fetch the data, reads it and 
  then uses your 'parseWeatherPromise' function from exercise4 to console.log() a forecast in the usual format.

  Your function should also handle rejections (failures of the promise) by logging to the console the phrase
  'Data processing failed!'

  NOTE: the apiKey string needs to be concatenated to the baseEndpoint string to obtain a valid endpoint
*/
var apiKey = "255d97c403d96b4642be1ff79ecddbfc";
var baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=";

function fetchRealWeatherData() {
  fetch(baseEndpoint + apiKey)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      var parsedData = {
        location: result.name,
        weather: result.weather[0].main,
        weatherDetails: result.weather[0].description,
        windSpeed: result.wind.speed,
        visibility: result.visibility,
        cloudCoverage: result.clouds.all
      };
      console.log(parsedData);
    })
    .catch(function(error) {
      console.log("Data processing failed!", error);
    });
}

fetchRealWeatherData();
