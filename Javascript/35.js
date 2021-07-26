/**
 * 35题 插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] === target) return left;
  if (target < nums[left]) return left;
  if (nums[right] === target) return right;
  let pointer = Math.floor((right - left) / 2) + left;
  let index = -1;
  while (right - left > 1) {
    if (nums[pointer] > target) {
      right = pointer;
    } else if (nums[pointer] < target) {
      left = pointer;
    } else {
      index = pointer;
      break;
    }
    pointer = Math.floor((right - left) / 2) + left;
  }
  if (index === -1) {
    if (nums[right] < target) {
      return right + 1;
    } else {
      return right;
    }
  }
  return index;
};

console.log(searchInsert([1, 3, 5, 6], 5));
