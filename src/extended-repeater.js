const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    str = String(str)
    repeatTimes = options.repeatTimes || 1
    separator = options.separator || '+'
    addition = String(options.addition)
    if (addition === 'undefined') {
        addition = ''
    }
    additionRepeatTimes = options.additionRepeatTimes || 1
    additionSeparator = options.additionSeparator || '|'
    let additionArr = []
    while (additionRepeatTimes > 0) {
        additionArr.push(addition)
        additionRepeatTimes--
    }
    str += additionArr.join(additionSeparator)
    additionArr = []
    while (repeatTimes > 0) {
        additionArr.push(str)
        repeatTimes--
    }
    return additionArr.join(separator)
}

module.exports = {
    repeater,
}
