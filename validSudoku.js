// Functions
/**
 * @param {character[]} line
 */
// O(n)
var checkForRepeated = function(line) {
  const nums = new Set();
  for (let j = 0; j < line.length; j++) {
    if (line[j] != '.') {
      if (nums.has(parseInt(line[j]))) return false;
      nums.add(parseInt(line[j]));
    }
  }
  return true;
}
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// O(n^2)
var isValidSudoku = function(board) {
  let square1 = [], square2 = [], square3 = [];
  for (let i = 0; i < 9; i++) {
    if (!checkForRepeated(board[i])) return false;
    const column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
      if (j < 3) {
        square1.push(board[i][j]);
      } else if (j > 5) {
        square2.push(board[i][j]);
      } else {
        square3.push(board[i][j]);
      }
    }
    if (!checkForRepeated(column)) return false;
    if (square1.length == 9) {
      if (!checkForRepeated(square1) || !checkForRepeated(square2) || !checkForRepeated(square3)) return false;
      square1 = [], square2 = [], square3 = [];
    }
  }
  return true;
};

var isValidSudokuFaster = function(board) {
  const rows = Array(9).fill().map(() => new Set());
  const cols = Array(9).fill().map(() => new Set());
  const boxes = Array(9).fill().map(() => new Set());

  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const num = board[i][j];
          if (num !== '.') {
              const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
              if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                  return false;
              }
              rows[i].add(num);
              cols[j].add(num);
              boxes[boxIndex].add(num);
          }
      }
  }

  return true;
};


// Test
const board1 = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
// output false;

const board2 = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
// output true

const board3 = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// output true

const board4 = [[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]];
// output false

const board5 = [[".",".",".",".",".",".","5",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],["9","3",".",".","2",".","4",".","."],[".",".","7",".",".",".","3",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".","3","4",".",".",".","."],[".",".",".",".",".","3",".",".","."],[".",".",".",".",".","5","2",".","."]]
// output false

const board = board5;
console.log(isValidSudoku(board));