const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
}
console.log(assertEqual());


// Implement a function that takes in an object and callback. Scan the object and return the first key
// for which the calback returns a truthy value. If no key found, return undefined.

const findKey = function(obj, callback) {
  for (let key in obj)
    if (callback(obj[key]))
    return key;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)) // => "noma"