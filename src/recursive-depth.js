const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr, count = 0) {
        let str
        if (count === 0) {
            str = JSON.stringify(arr)
                .split('')
                .filter(function (e) {
                    return e === '[' || e === ']'
                })
                .join('')
        } else {
            str = arr
                .split('')
                .filter(function (e) {
                    return e === '[' || e === ']'
                })
                .join('')
        }
        for (let i = 1; i < str.length; i++) {
            if (str[i] === ']' && str[i - 1] === '[') {
                str = str.substring(0, i - 1) + 'QQ' + str.substring(i + 1)
            }
        }
        str = str
            .split('')
            .filter(function (e) {
                return e === '[' || e === ']'
            })
            .join('')
        count++
        if (str.length === 0) {
            return count
        } else {
            return this.calculateDepth(str, count)
        }
    }
}

module.exports = {
    DepthCalculator,
}
