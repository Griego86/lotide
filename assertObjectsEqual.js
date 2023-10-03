// eqObjects function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (items in Object.keys(object1)) {
      if (Array.isArray(object1[items]) && Array.isArray(object2[items])) {
        eqArrays(Object.keys(object1), Object.keys(object2));
      } else if (object1[items] === object2[items]) {
        return true;
      } return false;
    }
  } return false;
};

// Actual function
const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect; //util library's inspect function for more descriptive output
  if (eqObjects(object1, object2)) {
    return `😀😀😀 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } return `😥😥😥 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
};


// Test code
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject));

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject));