// Functions
/**
 * @param {number[]} nums
 * @return {number}
 */
var findInflexion = function(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) return i;
  }
  return 0;
}

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {void}
 */
var swap = function(nums, a, b) {
  const swap = nums[a];
  nums[a] = nums[b];
  nums[b] = swap;
  return;
}

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {void}
 */
var sort = function(nums, a, b) {
  let init = a, down = b;
  while (init < down) {
    swap(nums, init, down);
    init++, down--;
  }
  return;
}


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length == 0) return [];
  if (nums.length == 1) return nums;

  // Find inflexion point
  let inflexionIndex = findInflexion(nums);
  
  // If sorted decreased -> return ordered array
  if (inflexionIndex == 0) {
    sort(nums, inflexionIndex, nums.length - 1);
    return;
  }

  // Middle inflexion index
  for (let i = nums.length - 1 ; i > inflexionIndex - 1; i--) {
    if (nums[i] > nums[inflexionIndex - 1]) {
      swap(nums, i, inflexionIndex - 1);
      sort(nums, inflexionIndex, nums.length - 1);
      return;
    }
  }

  // If sorted increasing -> swap indexes 1 and 2
  if (inflexionIndex == nums.length - 1) {
    swap(nums, 1, 2);
    return;
  }

  return;
};

// Tests
const nums1 = [1,2,3];
const nums2 = [3,2,1];
const nums3 = [1,1,5];
const nums4 = [2,3,1,4];
const nums5 = [1,2,5,4];

const nums =  nums5;
console.log(nextPermutation(nums));
