const words = ["just", "wanna", "play", "it", "right"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = (actual, expected) => {
  if(eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
}

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

// Testing
// let result1 = map(words, function(item) {
//   return item + "Hello";
// }) 

// console.log(result1)
// assertArraysEqual(result1, ["justHello", "wannaHello", "playHello", "itHello", "rightHello"])

let result1 = map(words, function(item) {
return item + item
}) 

console.log(result1)
assertArraysEqual(result1, ["justjust", "wannawanna", "playplay", "itit", "rightright"])


