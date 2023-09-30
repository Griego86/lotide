// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function (array) {
  const size = array.length;
  if (size <= 2) {
    return [];
  } const middleIndex = Math.floor(size / 2);
  if (size % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return [array[middleIndex]];
  }
};

// TEST CODE
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4, 5]);