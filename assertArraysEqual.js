const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  if(eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    
  }
}



// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [2, 2, 3]));
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));

module.exports = assertArraysEqual;