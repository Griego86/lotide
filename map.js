// Own map function 
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);
// console.log(results1);

// Test function assertArraysEqual
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

// Test  code
const test1 = map(words, x => x.length);
assertArraysEqual(test1, [6, 7, 2, 5, 3]);

const test2 = map(words, x => x[0]);
assertArraysEqual(test2, ["g", "c", "t", "m", "t"]);

const test3 = map(words, x => x[0] + 1);
assertArraysEqual(test3, ["g1", "c1", "t1", "m1", "t1"]);