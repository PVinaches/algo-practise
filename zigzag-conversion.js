// Functions
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length == 0 || numRows == 0) return '';
  if (s.length == 1 || numRows == 1 || s.length == 2) return s;
  
  if (numRows == 2) {
    let firstRow = '', secondRow = '';
    for (i = 0; i < s.length; i++) {
      if (i == 0 || i % 2 == 0) {
        firstRow += s.charAt(i);
      } else {
        secondRow += s.charAt(i);
      }
    }
    return firstRow + secondRow;
  }

  if (numRows > 2)  {
    const colNumber = s.length;
    const matrix = new Array(colNumber);
    let pos = 0, notBlank = 0, fullCol = 0, finish = false;
    for (col = 0; col < colNumber; col++) {
      if (colNumber == pos) break;
      for (row = 0; row < numRows; row++) {
        if (col == 0) matrix[row] = new Array(numRows);
        if (col == fullCol) {
          matrix[row][col] = s.charAt(pos);
          notBlank = numRows - 2;
          pos++;
          finish = true;
        } else {
          finish = false;
          if (row == notBlank) {
            matrix[row][col] = s.charAt(pos);
            notBlank--, pos++;
          } else {
            matrix[row][col] = -1;
          }
        }
      }
      if (finish) fullCol += (numRows - 1);
    }

    let result = '';
    for (j = 0; j < numRows; j++) {
      if (result.length == s.length) break;
      for (i = 0; i < colNumber; i++) {
        if (matrix[j][i] == undefined) break;
        if (matrix[j][i] != -1) result += matrix[j][i];
      }
    }
    return result;
  }
};

var convertOpt = function(s, numRows) {
  if (numRows <= 1 || s.length <= numRows) return s;

  let rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};


// Testing
// Test 1
cond1 = ["PAYPALISHIRING", 3];
res1 = "PAHNAPLSIIGYIR";

// Test 2
cond2 = ["PAYPALISHIRING", 4];
res2 = 'PINALSIGYAHRPI';

// Test 3
cond3 = ["A", 1];
res3 = 'A';

// Test 4
cond4 = [ "ABCDE", 2];
res4 = 'ACEBD';

cond = cond2;

console.log(convert(cond[0], cond[1]));
