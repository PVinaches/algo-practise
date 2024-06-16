// Functions

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // Match that there is a number in the string
  if (!(/.*\d.*/).test(s)) return 0;
  const string = s.replace(/^\s+/, '');

  let sign = 0, result = '0', i = 0;
  while (i < string.length) {
    // Add number to the result
    if((/\d/).test(string.charAt(i))) result = result + string.charAt(i);

    // Stop if the sign is after a number
    if ((/[-+]/).test(string.charAt(i)) && (sign != 0 || result != '0')) break;
    
    // Sign check
    if (string.charAt(i) == '-' && parseInt(result) == 0) sign = -1;
    if (string.charAt(i) == '+' && parseInt(result) == 0) sign = 1;

    // Stop if character is a non-digit
    if (!(/[-+]/).test(string.charAt(i)) && !(/\d/).test(string.charAt(i))) break;
    i++;
  }
  if (sign == 0) sign = 1;
  if (sign * parseInt(result) > ((2**31) - 1)) return (2**31) - 1;
  if (sign * parseInt(result) < ((-2)**31)) return (-2)**31;
  return parseInt(result) != 0 ? sign * parseInt(result) : parseInt(result);
};

// Testing
const test1 = "42";
const test2 = "   -042";
const test3 = "421337c0d3";
const test4 = "0-1";
const test5 = "words and 987";
const test6 = "-9999999999999";
//output 0
const test7 = "+-12";
//output 0
const test8 = "   +0 123";

const testing = test1;
console.log(myAtoi(testing));
