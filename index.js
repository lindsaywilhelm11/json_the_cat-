const { fetchBreedDescription } = require('./breedFetcher');

const breedInput = process.argv[2];
fetchBreedDescription('Savannah', (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});