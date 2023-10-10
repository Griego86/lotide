const eqObjects = require('./eqObjects');

const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect; //util library's inspect function for more descriptive output
  if (eqObjects(object1, object2)) {
    return `😀😀😀 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } return `😥😥😥 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
};

module.exports = assertObjectsEqual;


// Test code
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject));

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject));