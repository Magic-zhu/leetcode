/**
 * 有序数组的平方
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const len = nums.length;
    let result = [];
    let left = 0;
    let right = len - 1;
    while (left !== right) {
        const sRight = nums[right] * nums[right]
        const sLeft = nums[left] * nums[left]
        if (sRight >= sLeft) {
            result.unshift(sRight);
            right--;
        } else {
            result.unshift(sLeft);
            left++;
        }
    }
    result.unshift(nums[left] * nums[left])
    return result
};