//存在重复元素
// 给定一个整数数组，判断是否存在重复元素。
// 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
var containsDuplicate = function(nums) {
    let map = {};
    let r =false;
    for(let i=0,l=nums.length;i<l;i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1
        }else{
            r = true;
            break
        }
    }
    return r
};