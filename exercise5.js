const fetch = require('node-fetch');  // note: this is necessary to use 'fetch' in node

/* 
  The meterologist is suuuuuper happy with your progress and, confident in your skills, ask one more thing:
  All the forecasting has been moved to a remote server and the only way to access the data is via a https call
  through the internet.
  
  You now need to retrieve your object by using the 'fetch' javascript method on the 
  'https://s3-eu-west-1.amazonaws.com/lorenzomixedstuff/weatherData' address.

  Write a function called 'fetchWeatherData' that, given the endpoint, fetch the data, reads it and 
  then console.log() a object of the form:
  {
    location: 'London',
    weather: 'Drizzle',
    weatherDetails: 'light intensity drizzle,
    windSpeed: 4.1,
    visibility: 10000,
    cloudCoverage: 90
  }
  Your function should also handle rejections (failures of the promise) by logging to the console the phrase
  'Data processing failed!'
*/

var endPoint = 'https://s3-eu-west-1.amazonaws.com/lorenzomixedstuff/weatherData';

function fetchWeatherData() {
  fetch(endPoint)
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

fetchWeatherData();