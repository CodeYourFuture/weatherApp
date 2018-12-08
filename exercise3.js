/* 
  Next step: you want to validate a new approach to your data processing method. 
  
  As the computation to predict the weather can take several seconds to complete, 
  the input will be now provided as a Promise wrapping the required data rather than a plain object.

  Write a function called 'promiseHandler' that, given a Promise, waits for it to resolve and then console.log()
  the result of it. Don't worry about parsing or transforming the resulting object for now.
  Your function should also handle rejections (failures of the promise) by logging to the console the phrase
  'Data processing failed!'
*/

const testData = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve({test: 'Success!'})
  }, 1000);
});

const failData = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject({test: 'Rejected!'})
  }, 1000);
});

function promiseHandler(data) {
  data
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error) {
      console.log('Data processing failed!')
    });
}

// result
promiseHandler(testData);
promiseHandler(failData);