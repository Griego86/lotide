// Test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😥😥😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};


// Actual function
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


// Primitive value test code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const test1 = eqObjects(shirtObject, anotherShirtObject); // true
assertEqual(test1, true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const test2 = eqObjects(shirtObject, longSleeveShirtObject); // false
assertEqual(test2, false);

// Object value test code
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const test3 = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // true
assertEqual(test3, true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const test4 = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // false
assertEqual(test4, false);