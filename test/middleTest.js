const middle = require(`../middle`);
const assertArraysEqual = require(`../assertArraysEqual`);
const assert = require(`chai`).assert;

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });
});

// TEST CODE
// console.log(middle([1, 2, 3, 4, 5, 6])); // should return [3, 4]
// assertArraysEqual(middle([1, 2, 3]), 2); // should PASS
// console.log(middle([1, 2, 3, 4, 5])); // should return 3