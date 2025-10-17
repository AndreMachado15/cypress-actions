const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN_ELECTRON = process.env.TESULTS_TOKEN_ELECTRON;

cypress.run({
  browser: 'electron'
})
.then((results) => {
  const args = {
    target: TOKEN_ELECTRON,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
