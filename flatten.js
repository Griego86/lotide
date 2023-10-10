const assertArraysEqual = require('./assertArraysEqual');

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