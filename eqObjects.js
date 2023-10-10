const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;


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