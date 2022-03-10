const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Goal: A function that takes in two objects and returns true / false depending upon match.

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false