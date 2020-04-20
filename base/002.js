//旋转数组

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let p = null;
    for(let i=0;i<k;i++){
        p = nums.pop();
        nums.unshift(p);
    }
};

var rotate2 = function (nums,k){
    nums.splice(0,0,...nums.splice(nums.length - k))
}