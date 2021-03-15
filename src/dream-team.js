const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
  }
  let arr = members.filter(function(el) {
    if(typeof el === 'string') {
      return true
    }
  })
  let result = ''
  arr.map(function(el) {
    result += (el.trim())[0].toUpperCase()
  })
  return result.split('').sort().join('')
};
