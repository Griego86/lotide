const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😀😀😀 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😥😥😥 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should PASS
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should FAIL

module.exports = assertArraysEqual;