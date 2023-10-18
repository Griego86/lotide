const assertArraysEqual = require('./assertArraysEqual');


const without = (source, itemsToRemove) => {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);
    }
  } return newArray;
};

// Test code
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should PASS