const CustomError = require("../extensions/custom-error");

module.exports =  class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    
    for (let i = 0; i < arr.length; i++) {
      let add = 1
        if (Array.isArray(arr[i])) {
          add += this.calculateDepth(arr[i]);
          if (add > depth) {
            depth = add
          }
        }
    }
    return depth
  }
};