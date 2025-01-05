const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // console.log(null.toString())
  let result;
  if (!options.separator) {
    options.separator = '+'
  }
  if (options?.addition !== undefined) {
    if (!options.additionSeparator) {
      options.additionSeparator = '|'
    }
    if (options.addition || String(options.addition)) {
      let add = Array(options.additionRepeatTimes).fill(`${String(options.addition)}`).join(`${options.additionSeparator}`);
      result = Array(options.repeatTimes).fill(`${str + add}`).join(`${options.separator}`)
    }
  } else {
    if (options !== undefined) {
      result = Array(options.repeatTimes).fill(`${String(str).toString()}`).join(`${options.separator}`);
    } else {
      result = str.toString();
    }
  }

  return result;
}

module.exports = {
  repeater
};
