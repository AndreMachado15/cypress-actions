const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN_CHROME = process.env.TESULTS_TOKEN_CHROME;

cypress.run({
  browser: 'chrome'
})
.then((results) => {
  const args = {
    target: TOKEN_CHROME,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
