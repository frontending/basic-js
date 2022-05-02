const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const arrDouble = arr
    const array = []
    for (let i = 0; i < arrDouble.length; i++) {
        if (arrDouble[i] !== -1) {
            array.push(arrDouble[i])
        }
    }
    array.sort((a, b) => a - b)
    for (let i = 0, j = 0; i < arrDouble.length; i++) {
        if (arrDouble[i] !== -1) {
            arrDouble[i] = array[j]
            j++
        }
    }
    return arrDouble
}

module.exports = {
    sortByHeight,
}
