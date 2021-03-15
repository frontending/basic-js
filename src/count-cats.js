const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const arr = matrix.flat()
  let count = 0
  for(let el of arr) {
    if (el === '^^') {
      count++
    }
  }
  return count
};
