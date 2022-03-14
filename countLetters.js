// const assertEqual = function(actual, expected) {
//   if(actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// }

const countLetters = function (string) {
  // create an object to store the letters
  let results = {};
  // loop over the letters in the string
  for (let letter of string) {
    // output results
    // results += string[letter];
    // if letter has not been counted create it
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
  }
  return results;
}

module.exports = countLetters;
console.log(countLetters("sentence"))