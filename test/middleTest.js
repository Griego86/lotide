const middle = require(`../middle`);
const assertArraysEqual = require(`../assertArraysEqual`);

// TEST CODE
console.log(middle([1, 2, 3, 4, 5, 6])); // should return [3, 4]
assertArraysEqual(middle([1, 2, 3]), 2); // should PASS
console.log(middle([1, 2, 3, 4, 5])); // should return 3