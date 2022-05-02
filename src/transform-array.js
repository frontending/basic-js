const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw (error = new Error(
            `'arr' parameter must be an instance of the Array!`
        ))
    }
    let array = []
    for (let el of arr) {
        array.push(el)
    }
    if (array[0] === '--discard-prev' || array[0] === '--double-prev') {
        array[0] = null
    }
    if (
        array[array.length - 1] === '--discard-next' ||
        array[array.length - 1] === '--double-next'
    ) {
        array[array.length - 1] = null
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '--discard-next') {
            array[i] = null
            array[i + 1] = null
        } else if (array[i] === '--discard-prev') {
            array[i] = null
            array[i - 1] = null
        } else if (array[i] === '--double-next') {
            array[i] = array[i + 1]
        } else if (array[i] === '--double-prev') {
            array[i] = array[i - 1]
        }
    }
    return array.filter(function (el) {
        if (el !== null) {
            return true
        }
    })
}

module.exports = {
    transform,
}
