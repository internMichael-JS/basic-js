const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if(Object.hasOwn(date, "toString")||Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error('Invalid date!')
}
  switch (true) {
    case date.getMonth() < 2 || date.getMonth() > 10:
      return 'winter';
      break;
    case date.getMonth() < 5 && date.getMonth() > 1:
      return 'spring';
      break;
    case date.getMonth() < 8 && date.getMonth() > 4:
      return 'summer';
      break;
    default:
      return 'autumn';
  }
}

module.exports = {
  getSeason
};
