const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  let res = []
  Array.isArray(members)? members.forEach(el => {
      
      if (typeof el == "string") {
        let i = 0
        while (el[i] === ' ') { i++ }
         res.push(el[i].toUpperCase())
      }
      }): false      
    return res.sort().join('')
};


