const fetch = require("node-fetch");

var apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=xxx";

function callWeatherApi() {
  fetch(apiEndpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(text) {
      console.log("result:", text);
    })
    .catch(function(error) {
      console.log("ERROR - READ THE STACK TRACKE BELOW!!!!!!:\n", error);
    });
}

// callWeatherApi();

// 
const res = {
  weather: [
    {
      id: 300,
      main: "Drizzle",
      description: "light intensity drizzle",
      icon: "09d"
    }
  ],
};

function getWeather() {
  return res.weather[0];
}

const a = getWeather();
console.log(a)
