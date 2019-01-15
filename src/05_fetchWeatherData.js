var fetch = require("node-fetch"); // note: this is necessary to use 'fetch' in node

/* 
  The meterologist is suuuuuper happy with your progress and, confident in your skills, ask one more thing:
  All the forecasting has been moved to a remote server and the only way to access the data is via a https call
  through the internet.
  
  You now need to retrieve your object by using the 'fetch' javascript method on the 
  'https://s3-eu-west-1.amazonaws.com/lorenzomixedstuff/weatherData' address.

  Write a function called 'fetchWeatherData' that, given the endpoint, fetch the data, reads it and 
  then uses your 'parseWeatherPromise' function from exercise4 (you'll need to copy-paste it here, too.) 
  to console.log() a forecast in the usual format.
  
  Your function should also handle rejections (failures of the promise) by logging to the console the phrase
  'Data processing failed!'
*/

var endPoint =
  "https://s3-eu-west-1.amazonaws.com/lorenzomixedstuff/weatherData";

function fetchWeatherData() {
  // implement!
}

// result
// fetchWeatherData();

module.exports = fetchWeatherData;