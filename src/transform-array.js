const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw error = new Error('Error');
  }
  let array = []
  for (let el of arr) {
    array.push(el)
  }
  if (array[0] === '--discard-prev' || array[0] === '--double-prev') {
    array[0] = null;
  }
  if (array[array.length - 1] === '--discard-next' || array[array.length - 1] === '--double-next') {
    array[array.length - 1] = null;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--discard-next') {
      array[i] = null
      array[i + 1] = null
    }
    else if (array[i] === '--discard-prev') {
      array[i] = null
      array[i - 1] = null
    }
    else if (array[i] === '--double-next') {
      array[i] = array[i + 1] 
    }
    else if (array[i] === '--double-prev') {
      array[i] = array[i - 1]
    }
  }
  return array.filter(function(el) {
    if (el !== null) {
      return true
    }
  })
};
