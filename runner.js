const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const token = process.env.TESULTS_TOKEN;

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: token,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
