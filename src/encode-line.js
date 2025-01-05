const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str + ' '
  let newStr = '';
  let el;
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      el = str[i];
    } else if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        newStr += `${count + el}`;
      } else {
        newStr += `${el}`;
      }
      count = 1;
      el = str[i];
    }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
