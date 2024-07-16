// Functions
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var pivotSearch = function(nums) {
  let low = 0, high = nums.length - 1;
  while (low < high) {
      const mid = parseInt((high + low) / 2);
      if (nums[mid] > nums[high]) {
          low = mid + 1;
      } else {
          high = mid;
      }
  }
  return low;
};
/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var binarySearch = function(nums, target, start, end) {
  let low = start, high = end;
  while (low <= high) {
      const mid = parseInt((high + low) / 2);
      if (nums[mid] == target) {
          return mid;
      }
      if (nums[mid] < target) {
          low = mid + 1; 
      } else {
          high = mid - 1;
      }
  }
  return -1;
};
/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function(nums, target) {
  const pivot = pivotSearch(nums);
  let result = binarySearch(nums, target, 0, pivot - 1);
  if (result != -1) {
      return result;
  }
  result = binarySearch(nums, target, pivot, nums.length - 1);
  return result;
};

// Test
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Input: nums = [1], target = 0
// Output: -1