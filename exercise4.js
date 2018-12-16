/* 
  You successfully validated your ability to handle a Promise resolution and rejection, and you
  now want to integrate you solution.
  
  We already have built a function in exercise3 to read data off a given Promise, and a function to parse that
  data to a given format in exercise2. Combine the two to read and process the data provided as a Promise.

  Write a function called 'parseWeatherPromise' that, given the shown testData, waits for it to resolve and 
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

const testData = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve({
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
    });
  }, 1000);
});

const failData = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject({ test: "Rejected!" });
  }, 1000);
});

function parseWeatherPromise(data) {
  data
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
      console.log("Data processing failed!");
    });
}

// result
parseWeatherPromise(testData);
parseWeatherPromise(failData);
