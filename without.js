const without = function(source, itemsToRemove) {
  let results = [];
  for (let i = 0; i < source.length; i++) {
    if (!source[i].includes(itemsToRemove)) {
      results.push(source[i]);
    }
  }
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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);