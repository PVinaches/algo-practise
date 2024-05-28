// Functions
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n^2)
var twoSumEasy = function(nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
      for (j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] == target) {
              return [i, j];
          }
      }
  }
};

// O(nlogn) sorted + O(n) two pointers = O(nlogn) -> for ordered arrays
// For unordered, the sorted array is the indices array that I need to create 
var twoSumBetter = function(nums, target) {
  const indices = nums.map((_, index) => index);
  indices.sort((a, b) => nums[a] - nums[b]);
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const sum = nums[indices[i]] + nums[indices[j]];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [indices[i], indices[j]];
    }
  };
  return [];
};

// Test

const nums1 = [2,7,11,15];
const target1 = 9;
const nums2 = [3,2,4];
const target2 = 6;
const nums3 = [3,3];
const target3 = 6;

console.log(twoSumBetter(nums1, target1));
console.log(twoSumBetter(nums2, target2));
console.log(twoSumBetter(nums3, target3));