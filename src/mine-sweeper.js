const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newM = matrix.map(row => row.map(() => 0))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log('------------')
      let prevPrewRow, abovePrevRow, nextPrewRow, prevNextRow, underNextRow, nextNextRow = null;
      const prevCurrentRow = j > 0 ? matrix[i][j - 1] : null;
      const nextCurrentRow = j + 1 < matrix[i].length ? matrix[i][j + 1] : null;
      if (i > 0) {
        prevPrewRow = j > 0 ? matrix[i - 1][j - 1] : null;
        abovePrevRow = matrix[i - 1][j];
        nextPrewRow = j + 1 < matrix[i].length ? matrix[i - 1][j + 1] : null;
      }
      if (i + 1 < matrix.length) {
        prevNextRow = j > 0 ? matrix[i + 1][j - 1] : null;
        underNextRow = matrix[i + 1][j];
        nextNextRow = j + 1 < matrix[i].length ? matrix[i + 1][j + 1] : null;
      }
      const count = getCountOfTrue([prevPrewRow, abovePrevRow, nextPrewRow, prevNextRow, underNextRow, nextNextRow, prevCurrentRow, nextCurrentRow])
      newM[i][j] = count
    }
  }
  return newM
}
function getCountOfTrue(arr) {
  return arr.filter(el => el === true).length
}

module.exports = {
  minesweeper
};
