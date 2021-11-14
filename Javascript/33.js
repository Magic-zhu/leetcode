// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
// 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
// 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let splitIndex = nums.length-1;
    for(let i =0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            splitIndex = i
            break
        }
    }
    const newNums1 = nums.slice(0,splitIndex+1)
    const newNums2 = nums.slice(splitIndex+1)
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
    const a = searchRange(newNums1,target)[0]
   if(a!==-1){
       return a 
   }
   const b = searchRange(newNums2,target)[0]
   if(b!==-1){
       return b + newNums1.length
   }
   return -1
};