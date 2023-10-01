// eqArrays function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

// assertArraysEqual function
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😀😀😀 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😥😥😥 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Actual function
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } const sliceArgument = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return array.slice(sliceArgument - 1, (sliceArgument + 1));
  } else {
    return array[Math.ceil(sliceArgument)];
  }
};

console.log(middle([1, 2, 3, 4, 5, 6])); // should return [3, 4]
assertArraysEqual(middle([1, 2, 3]), 2); // should PASS
console.log(middle([1, 2, 3, 4, 5])); // should return 3