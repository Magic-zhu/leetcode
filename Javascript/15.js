/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums = nums.sort()
    let r = [];
    for(let i = 0;i<nums.length;i++){
        if( i > 0 && nums[i-1] === nums[i]){
            continue
        }
        for(let j = i+1;j<nums.length;j++){
            if( j > i + 1 && nums[j-1] === nums[j]){
                continue
            }
            for(let k = j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k]===0){
                    r.push([nums[i],nums[j],nums[k]])
                    break
                }
            }
        }
    }
    return r
};