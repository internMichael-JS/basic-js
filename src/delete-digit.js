const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let num;
  let m = n.toString();
  for (let i = 0; i < m.length; i++) {
    num = m.slice(0, i) + m.slice(i + 1, n.length);
    if (+num > max) {
      max = +num;
    }
    console.log(+num)
  }
  return max
}

module.exports = {
  deleteDigit
};
