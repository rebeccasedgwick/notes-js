
var assert = {
  isTruthy: function (assertionToCheck, testName) {
    if (!assertionToCheck) {
      this.log.push(Error(testName + "Assertion failed: " + assertionToCheck + " is not truthy"))
    } else this.log.push(`${testName}: Pass: ${assertionToCheck} is truthy`)
  },
  isEqual: function (assertionOne, assertionTwo, testName) {
    if (assertionOne !== assertionTwo) {
      this.log.push(Error(`${testName}: Assertion failed: ${assertionOne} and ${assertionTwo} do not match`))
    } else this.log.push(`${testName}: Pass: ${assertionOne} === ${assertionTwo}`)

  },
  isIncluded: function (assertionOne, assertionTwo, testName) {
    if (!assertionOne.includes(assertionTwo)) {
      this.log.push(Error(`${testName}: Assertion failed: ${assertionOne} does not include ${assertionTwo}`))
    } else this.log.push(`${testName}: Pass: ${assertionOne} includes ${assertionTwo}`)
  },
  log: [],
  showLog: function () {
    this.log.forEach(err => {
      if ((typeof err) === 'string') {
        console.log(err)
      } else {
        console.log(`${err.name} Message: ${err.message}`);
        console.log(`Stack trace: ${err.stack}`)
      }
    })
  }
};
