const request = require('request');

const breedInput = process.argv[2]
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`

request(url, function(error, response, body, callback) {
if (breedInput.name !== undefined) {
    console.log('statusCode:', response && response.statusCode); 
    console.log(breedInput)
 
    const data = JSON.parse(body);
    if (error) {
        console.log(error)
        return;
    }
    console.log(data);
    console.log(typeof data);

}
console.log(`Error: ${breedInput} not found. Returned:`, error)
})
