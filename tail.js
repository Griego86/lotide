const assertEqual = require('./assertEqual');

// Function that returns the tail of an array
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;