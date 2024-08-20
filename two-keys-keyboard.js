// Functions
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  // Base case
  if (n == 1) return 0;

  // Prime numbers
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      return i + minSteps(n / i);
    }
  }
  return n;
};

// Testing
const n1 = 4;
const n2 = 5;
const n3 = 8;
const n4 = 9;
const n5 = 10;
const n6 = 12;
const n7 = 27;

const n = n6;
console.log(minSteps(n));
