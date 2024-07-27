// Functions
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 == '0' || num2 == '0') return '0';
  const n1 = num1.split('');
  const n2 = num2.split('');
  let result = [], initPos = 0, pos = 0, next = 0;
  for (let i = n2.length -1; i >= 0; i--) {
    pos = initPos;
    for (let k = n1.length -1; k >= 0; k--) {
      const product = (n1[k] * n2[i]) + next;
      if (pos < result.length) {
        const totalProduct = product + result[pos];
        result[pos] = Math.floor(totalProduct % 10);
        next = Math.floor(totalProduct / 10);
      } else {
        result.push(Math.floor(product % 10));
        next = Math.floor(product / 10);
      }
      pos++;
    }
    if (next != 0) {
      if (pos < result.length) {
        result[pos] += next;
      } else {
        result.push(next);
      }
      next = 0;
    }
    initPos++;
  }
  let final = '';
  for (let j = 0; j < result.length; j++) {
    final = result[j] + final;
  }
  
  return final;
};

// Testing

const num1 = '2';
const num2 = '3';
// output 6

const num3 = '123';
const num4 = '456';
// output 56088

const num5 = '123456789';
const num6 = '987654321';
// output 121932631112635269

console.log(multiply(num5, num6));