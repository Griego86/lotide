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
const flatten = function(nestedArray) {
  let flattenedArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      flattenedArray = flattenedArray.concat(nestedArray[i]);
    } else {
      flattenedArray.push(nestedArray[i]);
    }
  } return flattenedArray;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); // should give [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // should PASS