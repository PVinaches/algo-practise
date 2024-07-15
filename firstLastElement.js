// Functions
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var binarySearch = function(nums, target) {
  let low = 0, high = nums.length;
  while (low < high) {
      const mid = parseInt((high + low) / 2);
      if (nums[mid] < target) {
          low = mid + 1;
      } else {
          high = mid;
      }
  }
  return low;
}

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var searchRange = function(nums, target) {
  if (nums == undefined || nums.length == 0 || target == undefined) return [-1,-1];
  if (nums.length == 1 && nums[0] != target) return [-1,-1];
  if (nums[0] > target || nums[nums.length - 1] < target) return [-1,-1];
  const init = binarySearch(nums, target);
  const fin = binarySearch(nums, (target + 1)) - 1;
  return [nums[init] == target ? init : -1 , nums[fin] == target ? fin : -1];
};

// Testing
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]