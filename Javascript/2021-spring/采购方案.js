/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function (nums, target) {
    // 从小到大排序
    let sort_nums = nums.sort((a, b) => a - b)
    // 双指针
    let total = 0;
    let l = nums.length;
    let j = l - 1;
    for (let i = 0; i < l; i++) {
        while (sort_nums[i] + sort_nums[j] > target && i < j) {
            j--
        }
        if (i >= j) {
            return total%1000000007
        }
        total = total + j - i
    }
};

let a = purchasePlans([2, 2, 1, 9], 10)
console.log(a)