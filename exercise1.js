/* 
  A data structure containing the weather for London has been provided to you by a meteorologist. 

  It's nice and full of information but most of it is not interesting, so you are tasked with writing
  a function that takes the data value and return a 'flat' object (flat means that there are not nested values)
  with just a few values: name, weather.main, wind.speed, visibility.

  Write a function called 'parseWeather' that given the shown testData returns a object of the form:
  {
    name: 'London',
    main: 'Drizzle',
    speed: 4.1,
    visibility: 10000
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
    name: data.name,
    main: data.weather[0].main,
    speed: data.wind.speed,
    visibility: data.visibility
  };
}

// result
console.log(parseWeather(testData))