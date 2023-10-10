const assertEqual = require('./assertEqual');

// Takes in a sentence as a string and returns a count of each of the letters in that sentence.
const countLetters = (string) => {
  let letters = {};
  for (item of string) {
    if (item !== " ") {
      if (letters[item]) {
        letters[item] += 1;
      } else {
        letters[item] = 1;
      }
    }
  } return letters;
};

// // Test code
const letters = countLetters("lighthouse in the house");
// console.log(letters);

// // All tests should PASS
assertEqual(letters["l"], 1);
assertEqual(letters["s"], 2);
assertEqual(letters["n"], 1);