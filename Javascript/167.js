/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let l = 0
    let r = numbers.length -1
    let now = -1 
    while(l<r){
        now = numbers[l]+numbers[r]
        if(now>target){
            r--
        }
        if(now<target){
            l++
        }
        if(now==target){
            return [l+1,r+1]
        }
    }
};