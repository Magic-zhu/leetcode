var searchRange = function (nums, target) {
    let left = 0;
    let index = -1;
    let right = nums.length - 1;
    if (nums[left] === target) index=left;
    if (nums[right] === target) index=right;
    let pointer = Math.floor((right - left) / 2) + left;
    while (right - left > 1) {
        if (nums[pointer] > target) {
            right = pointer;
        } else if (nums[pointer] < target) {
            left = pointer;
        } else {
            index = pointer;
            break
        }
        pointer = Math.floor((right - left) / 2) + left;
    }
    if (index === -1) return [-1, -1]
    let i = 0
    let j = 0
    while (nums[index + i] === target) {
        i--
    }
    while (nums[index + j] === target) {
        j++
    }
    return [index + i + 1, index + j - 1]
};

let nums = [1]
let target = 1

console.log(searchRange(nums, target))