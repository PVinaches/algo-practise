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
  let changingPos = -1, pivot = inflexionIndex - 1;
  for (let i = nums.length - 1 ; i > pivot; i--) {
    if (nums[i] > nums[pivot]) {
      changingPos = i;
      break;
    }
  }
  swap(nums, changingPos, pivot);
  sort(nums, inflexionIndex, nums.length - 1);
  return;
};

// Tests
const nums1 = [1,2,3];
const nums2 = [3,2,1];
const nums3 = [1,1,5];
const nums4 = [2,3,1,4];
const nums5 = [1,2,5,4];
const nums6 = [1,2,3,4];

const nums =  nums6;
console.log(nextPermutation(nums));
