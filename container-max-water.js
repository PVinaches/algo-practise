// Functions
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (!height || height.length < 2) return 0;
  let maxArea = 0, i = 0, j = height.length - 1; 
  while (i < j) {
    let maxAreaTemp = 0, maxXTemp = Math.abs(i - j);
    if (height[i] - height[j] <= 0) {
      maxAreaTemp = height[i] * maxXTemp;
      i++;
    } else {
      maxAreaTemp = height[j] * maxXTemp;
      j--;
    }
    if (maxAreaTemp >= maxArea) maxArea = maxAreaTemp;
  }
  return maxArea;
};

// Testing
const height1 = [1,8,6,2,5,4,8,3,7];
// output 49

const height2 = [1,1];
// output 1

const height3 = [1,2,1];
// output 2

const height4 = [1,2,4,3]
// output 4

const height = height1;
console.log(maxArea(height));