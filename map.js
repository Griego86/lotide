const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];


const map = (array, callback) => {
  const results = [];
  for (item of array) {
    results.push(callback(item));
  }
  return results;
};


// Test  code
const test1 = map(words, x => x.length);
assertArraysEqual(test1, [6, 7, 2, 5, 3]);

const test2 = map(words, x => x[0]);
assertArraysEqual(test2, ["g", "c", "t", "m", "t"]);

const test3 = map(words, x => x[0] + 1);
assertArraysEqual(test3, ["g1", "c1", "t1", "m1", "t1"]);