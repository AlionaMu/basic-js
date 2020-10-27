const CustomError = require("../extensions/custom-error");


class VigenereCipheringMachine {
  constructor(mod) { 
      this.mod = mod;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error
    }

    let diff = 0;
    let res = [];
    let b = [];

    let mArr = message.toUpperCase().split('');
    let kArr = key.toUpperCase().split('');

    for (let i = 0; i < mArr.length; i++) {
      if (mArr[i].match(/[a-z]/gi)) {
        if (diff >= kArr.length) 
          diff = 0;  
          b.push(kArr[diff])
          diff++
        }
        else { b.push('-')}
    }

    for (let i = 0; i < mArr.length; i++) {
      if (mArr[i].match(/[a-z]/gi)) {
        let letter = mArr[i].charCodeAt() + b[i].charCodeAt() - 65;
        res.push(String.fromCharCode(letter > 64 && letter < 91 ? letter : letter - 26))
      }
      else {
        res.push(mArr[i])
      }
    }
    if (this.mod == false) {
      return res.reverse().join('')
     } else {
       return res.join('')
     }
  }    

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error
    }

    let diff = 0;
    let res = [];
    let b = [];

    let mArr = message.toUpperCase().split('');
    let kArr = key.toUpperCase().split('');

    for (let i = 0; i < mArr.length; i++) {
      if (mArr[i].match(/[a-z]/gi)) {
        if (diff >= kArr.length) 
          diff = 0;  
          b.push(kArr[diff])
          diff++
        }
        else { b.push('-')}
    }

    for (let i = 0; i < mArr.length; i++) {
      if (mArr[i].match(/[a-z]/gi)) {
        let letter = mArr[i].charCodeAt() - b[i].charCodeAt() + 65;
        res.push(String.fromCharCode(letter > 64 && letter < 91 ? letter : letter + 26))
      }
      else {
        res.push(mArr[i])
      }
    }

    if (this.mod == false) {
     return res.reverse().join('')
    } else {
      return res.join('')
    }
  }
}
module.exports = VigenereCipheringMachine;
