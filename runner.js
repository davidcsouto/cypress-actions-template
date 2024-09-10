const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBiNTQ1YzZlLWU5MTgtNDRlZi04NTVlLWYwZjQyZjllZWRiMy0xNzI1OTg0NTk5MzUxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMWU5ZWYzYzAtMDZhNi00MGNiLTkzZmQtZDkxMmQwODlhZmI2IiwidHlwZSI6InQifQ.dWjq4_T1v1_SBHKPbyhaJ-DWmDnPXYKc0f2q4ITJmRQ'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
