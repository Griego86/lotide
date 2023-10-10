const assertArraysEqual = require('./assertArraysEqual');


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