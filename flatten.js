const flatten = function (arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // If the current element is an array, recursively flatten it
      flattened = flattened.concat(flatten(arr[i]));
    } else {
      // If it's not an array, add it to the flattened array
      flattened.push(arr[i]);
    }
  } return flattened;
};



const assertArraysEqual = function (array1, array2) {
  const eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    } for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        return true;
      }
    } return false;
  }; const message = eqArrays(array1, array2)
    ? `😀😀😀 Arrays Equal Assertion Passed: ${array1} === ${array2}`
    : `😥😥😥 Arrays Equal Assertion Failed: ${array1} !== ${array2}`;
  console.log(message);
};


const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    }
  } return false;
};

let flattened = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flattened, [1, 2, 3, 4, 5, 6]);