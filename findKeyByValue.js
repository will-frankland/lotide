// Create a function that takes in an object and value.
// Scan object and return key of object which relates to that value
// Key: sci-fi

const findKeyByValue = function (obj, val) {
  const findKeys = Object.keys(obj);
  for (let key of findKeys) {
    if (obj[key] === val) {
      return key;
    }
  }
};

// I want to search through an object
// check if the object contains a value
// if so, output its key

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);