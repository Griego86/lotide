const assertEqual = require('./assertEqual');

const countOnly = (allItems, itemsToCount) => {
  // allItems: Is an array of strings we need to look through
  // itemsToCount: Is an object specifying what to count
  const results = {};
  for (item of allItems) {
    if (itemsToCount[item]) {
      // console.log(item);
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


// Test code
const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });

// All functions should PASS
// Note: assertEqual can compare only primitive types
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
