const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
}
console.log(assertEqual);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Liverpool", "Liverpool");
assertEqual("Beer", 8);
assertEqual(27, 3);