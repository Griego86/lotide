const tail = require(`../tail`);
const assertEqual = require(`../assertEqual`);
const assert = require(`chai`).assert;
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns 2 for [Hello, Lighthouse, Labs] ", () => {
    assert.deepEqual(result.length, 2);
  });
  it("first element is Lighthouse", () => {
    assert.deepEqual(result[0], "Lighthouse"); 
  });
});

// TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(assertEqual(result.length, 2)); // ensure we get back two elements
// console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
// console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"