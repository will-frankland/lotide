const assertArraysEqual = require('./assertArraysEqual')


function middle(arr1) {
  // Determine if the array has 2 elements or less, return empty array if so.
  if (arr1.length <= 2) {
    return [];
  }
  // determine if the array is odd, remainder of 1 will idicate so.
  if (arr1.length % 2 === 1) {
    // return mid value of array and floor it to remove decimal, cannot have .5 of elem
    return [arr1[Math.floor(arr1.length / 2 )]];
  }
  // if not odd, must be even so return the two midpoint elms of even array.
  return [arr1[arr1.length / 2 - 1], arr1[arr1.length / 2]]
  
};
// test functions
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// console.log(middle([1, 2, 3])) // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
