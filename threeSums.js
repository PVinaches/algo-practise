// Functions
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const results = [];

  for (let k = 0; k < nums.length - 2; k++) {
    if (k > 0 && nums[k] == nums[k - 1]) continue;
    let i = k + 1, j = nums.length - 1 ;
    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j];
      if (sum == 0) {
        results.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] == nums[i + 1]) {
          i++;
        }
        while (i < j && nums[j] == nums[j - 1]) {
          j--;
        }
        i++;
        j--;
      } else if (sum < 0) {
        i++;
      } else {
        j--;
      }
    }
  }
  return results;
}

// Testing
const nums1 = [-1,0,1,2,-1,-4];
const nums2 = [0,1,1];
const nums3 = [0,0,0]
const nums4 = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];

const nums = nums4;
console.log(threeSum(nums));


// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//   const sortedNums = nums.sort((a, b) => a - b);
//   const results = [];

//   for (let k = 0; k < sortedNums.length - 2; k++) {
//     let i = k + 1, j = sortedNums.length - 1 ;
//     while (i < j) {
//       const sum = sortedNums[k] + sortedNums[i] + sortedNums[j];
//       const numsArray = [sortedNums[k], sortedNums[i], sortedNums[j]].sort((a, b) => a - b);

//       if (sum == 0 && results.length == 0) {
//         results.push(numsArray);
//       }

//       if (sum == 0 && results.length > 0) {
//         let repeat = false;
//         for (let a = results.length - 1; a >= 0; a--) {
//           if (results[a][0] < numsArray[0]) {
//             break;
//           }
//           if (results[a][0] == numsArray[0] && results[a][1] == numsArray[1] && results[a][2] == numsArray[2]) {
//             repeat = true;
//             break;
//           }
//         }

//         if (!repeat) results.push(numsArray);
//       }
      
//       sum <= 0 ? i++ : j--;
//     }
//   }
//   return results;
// }