// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😥😥😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Actual function
const countLetters = function(string) {
  string = string.toLowerCase().split(" ").join("");
  let result = {};
  for (const item of string) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  } return result;
};


// Test code
const lighthouse = countLetters("lighthouse in the house");
assertEqual(lighthouse["s"], 2);