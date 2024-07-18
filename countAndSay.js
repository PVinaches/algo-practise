// Functions
/**
 * @param {string} n
 * @return {string}
 */
var encode = function(n) {
  let result = '', repeat = 1;
  for (let i = 0; i < n.length; i++) {
      if (n[i] == n[i + 1]) {
          repeat++;
      } else {
          result += repeat + n[i];
          repeat = 1;
      }
  }
  return result;
}

/**
* @param {number} n
* @return {string}
*/
var countAndSay = function(n) {
  let result = '';
  if (n == 1) return '1';
  result = countAndSay(n - 1);
  return encode(result);
};

// Tests
const n1 = 1;
// output "1"
const n2 = 4;
// output "1211"
const n3 = 3;
// output "21"
const n4 = 2;
// output "11"

const n = n2;
console.log(countAndSay(n));