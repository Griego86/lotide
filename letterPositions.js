const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = (string) => {
  let results = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i);
    }
  } return results;
};



// // Test code
const sentence = letterPositions("hello");

// // All functions should PASS
assertArraysEqual(sentence["h"], [0]);
assertArraysEqual(sentence["o"], [4]);