const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || typeof Number(sampleActivity) !== 'number' || isNaN(Number(sampleActivity)) || Number(sampleActivity) > 15 || Number(sampleActivity) <= 0) {
    return false
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) * HALF_LIFE_PERIOD / 0.693)
};
