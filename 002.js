/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const b = new Map()
    const l = nums.length
    for (let i = 0; i < l; i ++) {
      let a = b.get(target - nums[i])
      if (a !== undefined) return [a, i]
      b.set(nums[i], i)
    }
  };