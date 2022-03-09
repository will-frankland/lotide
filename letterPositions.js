// Return all the indicies in a string where each character is found
// { H: [0], E: [1], L: [2, 3], O: [4] }
const letterPositions = function (sentence) {
  const results = {};
  // iterate through the word in the sentence
  for (i = 0; i < sentence.length; i++) {
    // if the letter is not present then create it inside the object(results)
    if (!results[sentence[i]]) {
      // add the index pos. to the newly created letter as an array [i]
      results[sentence[i]] = [i];
    } else {
      // push the recurring letter to the array already created as it is a duplicate
      results[sentence[i]].push(i);
    }
  }
  return results;
};

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
// console.log(letterPositions("Hello"));
assertArraysEqual(letterPositions("hello").e, [1]);