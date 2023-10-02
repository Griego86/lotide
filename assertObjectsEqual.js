// Test functions
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😥😥😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};


const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (let key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        eqArrays(object1Keys, object2Keys);
      } else if (object1[key] === object2[key]) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};


// Actual function
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😀😀😀 Assert Objects Equal Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😥😥😥 Assert Objects Equal Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};