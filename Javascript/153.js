// 153. 寻找旋转排序数组中的最小值
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let min = nums[0]
    for(let i = 0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            min = nums[i+1]
            break
        }
    }
    return min
};