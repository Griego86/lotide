const assertEqual = require('./assertEqual');

const findKeyByValue = (object, value) => {
  for (i in object) {
    if (object[i] === value) {
      return i;
    } undefined;
  }
};

// Test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// All should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
console.log(findKeyByValue({ drama: 123, movie: 4567 }, 13)); //should return undefined