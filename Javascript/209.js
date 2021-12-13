/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let ans = 0
  let left = -1
  let right = 0
  let temp = 0
  while(temp<target && left<nums.length){
      left++
      temp += nums[left]
  }
  if(left>=nums.length) return 0
  ans = left+1
  while(left<nums.length){
      if(temp >=target){
          ans = Math.min(ans,left-right+1)
          temp = temp-nums[right]
          right++
      }else{
          left++
          temp+=nums[left]
      }
  }

  return ans
};
