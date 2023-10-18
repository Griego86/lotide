const middle = (array) => {
  const length = array.length;

  if (length <= 2) {
    return [];
  } 
  
  const middleIndex = Math.floor(length / 2); // Rounds down
  
  if (length % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return array[middleIndex];
  }
};

module.exports = middle;