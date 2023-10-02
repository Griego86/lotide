const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😥😥😥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Actual function
const findKeyByValue = function(object, value) {
  const itemArray = Object.keys(object);
  for (const item of itemArray) {
    if (object[item] === value) {
      return item;
    }
  }
};


// Test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);