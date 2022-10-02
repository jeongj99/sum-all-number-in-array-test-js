const sumItems = array => {
  return array.reduce((accumulator, curr) => {
    if (Array.isArray(curr)) {
      return accumulator + sumItems(curr);
    }
    return accumulator + curr;
  }, 0);
};

module.exports = sumItems;