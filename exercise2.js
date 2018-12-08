/* 
  The metereologist is very happy, but now they want more! The function written in exercise1 works, 
  but it's not very clear what each key refers to, and on top of that they want some more data returned..

  You are asked to update the 'parseWeather' function that you wrote to return
  some more data. The result object keys should also have a more descriptive name.
 
  Write a function called 'parseWeather' that given the shown testData returns a object of the form:
  {
    location: 'London',
    weather: 'Drizzle',
    weatherDetails: 'light intensity drizzle,
    windSpeed: 4.1,
    visibility: 10000,
    cloudCoverage: 90
  }
*/

const testData = {
  weather: [
    {
      id: 300,
      main: "Drizzle",
      description: "light intensity drizzle",
      icon: "09d"
    }
  ],
  base: "stations",
  visibility: 10000,
  wind: {
    speed: 4.1,
    deg: 80
  },
  clouds: {
    all: 90
  },
  id: 2643743,
  name: "London",
  cod: 200
};

function parseWeather(data) {
  return {
    location: data.name,
    weather: data.weather[0].main,
    weatherDetails: data.weather[0].description,
    windSpeed: data.wind.speed,
    visibility: data.visibility,
    cloudCoverage: data.clouds.all
  };
}

// result
console.log(parseWeather(testData))