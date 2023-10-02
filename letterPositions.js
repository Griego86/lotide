// Test functions
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😀😀😀 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😥😥😥 Assertion Failed: ${array1} !== ${array2}`);
  }
};


// Actual function
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