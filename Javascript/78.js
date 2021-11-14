/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let n = nums.length
    let s = 1 << n
    let r = []
    for(let i = 0; i<s;i++){
        let t = []; 
        for (let j = 0;j<n;j++){
            if(i & 1<<j){
                t.push(nums[j])
            }
        }
        r.push(t)
    }
    return r
};