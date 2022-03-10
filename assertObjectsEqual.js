// Should print assertion passed/failed like the arrays task

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌  Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//eqObjects function to be called ^^^
const eqObjects = function (obj1, obj2) {
  // compare lengths of object keys
  const keysArray1 = Object.keys(obj1)
  const keysArray2 = Object.keys(obj2)
  if (keysArray1.length !== keysArray2.length) {
    return false;
  }
  for (const key of keysArray1) {
    if (Array.isArray(obj1[key])) {
      if (eqArrays(obj1[key]), obj2[key]) {
        continue;
      } else {
        return false;
      }
    }
    if (obj1[key] === obj2[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};