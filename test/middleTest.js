const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// test functions
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// console.log(middle([1, 2, 3])) // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]