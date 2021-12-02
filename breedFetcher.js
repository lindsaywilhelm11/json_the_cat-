const request = require('request');

const fetchBreedDescription = function(breedInput, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`;
  request(url, function(error, response, body) {
    console.log('statusCode:', response && response.statusCode);
    if (error) {
      callback(`Request Failure:`, error);
      return;
    }
 
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`No cat identified!`, null);
      return;
    }
    if (data[0] !== undefined) {
      callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
