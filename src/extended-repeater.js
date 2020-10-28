const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let sep
  let addSep
  
  options.separator? sep = options.separator.toString() : sep = '+'
  options.additionSeparator? addSep = options.additionSeparator.toString() : addSep = '|'
 
  let res = str;
  let b = options.addition

  if (b) {
  for (j = 1; j < options.additionRepeatTimes; j++) {
      b = b + addSep + options.addition
  }
  for (i = 1; i < options.repeatTimes; i++) {
  res = res + b + sep + str 
  }
  res = res + b
} else {
  for (i = 1; i < options.repeatTimes; i++) {
    res = res + sep + str 
    }
}
  return res 
 };
  