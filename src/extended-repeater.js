const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  str = String(str)
  repeatTimes = options.repeatTimes || 1
  separator = options.separator || '+'
  addition = String(options.addition)
  if (addition === 'undefined') {addition = ''}
  additionRepeatTimes = options.additionRepeatTimes || 1
  additionSeparator = options.additionSeparator || '|'
  let additionArr = []
    while (additionRepeatTimes > 0) {
      additionArr.push(addition)
      additionRepeatTimes --
    }
  str += additionArr.join(additionSeparator)
  additionArr = []
  while (repeatTimes > 0) {
    additionArr.push(str)
    repeatTimes --
  }
  return additionArr.join(separator)
};
  