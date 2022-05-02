const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let arr = []
    let result = {}
    for (let i = 0; i < domains.length; i++) {
        let temp = []
        temp = domains[i].split('.').reverse()
        arr.push(temp)
    }
    while (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (result.hasOwnProperty(`.${arr[i][0]}`)) {
                result[`.${arr[i][0]}`]++
            } else {
                result[`.${arr[i][0]}`] = 1
            }
            if (arr[i].length > 1) {
                arr[i][1] = arr[i][0] + '.' + arr[i][1]
                arr[i].splice(0, 1)
            } else {
                arr.splice(i, 1)
            }
        }
    }
    return result
}

module.exports = {
    getDNSStats,
}
