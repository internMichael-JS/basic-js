const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || !members.some(el =>
    typeof (el) === 'string'
  )) return false;
  res = members.reduce((result, el) => {
    if (typeof el === 'string') {
      let doUpper = el.match(/[a-zA-Zа-яА-Я]/);
      result.push(doUpper[0].toUpperCase());
    }
    return result;
  }, []);
  return res.sort().join('');
}

module.exports = {
  createDreamTeam
};
