// Functions
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Not a number
    if (x === '') return undefined;
    if (x >= -9 && x <= 9) return x;
    
    // Save negative case
    const negative =  x < 0 ? -1 : 1; 
    let initNumber = negative * x;
    
    // Make the number smaller and start again
    let answer = '', shorterNumber = initNumber;
    while (shorterNumber >= 10) {
      answer = answer + (shorterNumber % 10).toString();
      shorterNumber = Math.trunc(shorterNumber / 10);
    }
    answer = answer + shorterNumber.toString();
    if (answer >= ((2**31) - 1) || answer <= ((-2)**31)) return 0;
    return negative == -1 ? '-' + answer : answer;
};

// Testing
const x1 = 123;
const x2 = -321;
const x3 = 21;
const x4 = 0;
const x5 = 1534236469;

let reverseNumber = x5;
console.log(reverse(reverseNumber));