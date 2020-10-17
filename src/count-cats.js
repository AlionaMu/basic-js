const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let cats = 0;
    matrix.length ? matrix.forEach(el => el.filter(item => item === '^^'? cats += 1 : 0)): 0
    return cats
};
