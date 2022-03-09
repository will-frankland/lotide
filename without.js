const assertArraysEqual = require('./assertArraysEqual')

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
    }
  }
  return true
};

const without = function(source, itemsToRemove){
  let newArray = [];
  for (const element of source){
    if(!itemsToRemove.includes(element)){ //does not include
      newArray.push(element)
    }
  }
  return newArray
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);