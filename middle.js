const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } const sliceArgument = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return array.slice(sliceArgument - 1, (sliceArgument + 1));
  } else {
    return array[Math.ceil(sliceArgument)];
  }
};

module.exports = middle;