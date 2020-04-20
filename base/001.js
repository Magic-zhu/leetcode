
var singleNumber = function(nums) {
    let r= 0;
    for (let i=0,l =nums.length;i<l;i++){
        r = r^nums[i]
        console.log(r)
    }
    return r
};

singleNumber([2,1,3,1,3])