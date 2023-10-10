const assertEqual = require('./assertEqual');

const findKey = (object, callback) => {
  for (item in object) {
    if (callback(object[item])) {
      return item;
    }
  } return undefined;
};

// Test code
const testObject = {
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
};

assertEqual(findKey(testObject, x => x.stars === 2), "noma") // should PASS
assertEqual(findKey(testObject, x => x.stars > 2), "Akaleri") // should PASS
assertEqual(findKey(testObject, x => x.stars < 2), "Blue Hill") // should PASS
assertEqual(findKey(testObject, x => x.stars > 3), undefined) // should PASS
