const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let numActivity = parseFloat(sampleActivity)
  if (typeof sampleActivity == 'string' && numActivity > 0 && numActivity <= 15) {
  let k = 0.693/HALF_LIFE_PERIOD;
  let res = Math.log(MODERN_ACTIVITY/numActivity);
  return Math.ceil(res / k)}
  else return false;
};
