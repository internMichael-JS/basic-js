const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = email.lastIndexOf("@");
  let newStr = email.slice(index + 1, email.length);
  let first = newStr.match(/[a-zA-Z]/);
  if (newStr.indexOf(first) === 0) {
    return newStr;
  } else {
    return newStr.slice(newStr.indexOf(first), newStr.length);
  }
}

module.exports = {
  getEmailDomain
};
