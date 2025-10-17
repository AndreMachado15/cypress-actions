const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN_FIREFOX = process.env.TESULTS_TOKEN_FIREFOX;

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN_FIREFOX,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
