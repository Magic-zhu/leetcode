const len = nums.length;
let left = 0;
if(nums[1] && nums[0] > nums[1]) return 0
let right = len -1;
if(nums[right] > nums[right-1]) return right
pointer = Math.floor((left+right)/2);
while(
    left<right && 
    !(nums[pointer-1] < nums[pointer] && nums[pointer+1] < nums[pointer]) 
){
    if(nums[pointer-1]<=nums[pointer]){
        // 向右寻找
        left = pointer
        pointer =  Math.ceil((left+right)/2);
    }else{
        // 向左寻找
        right = pointer 
        pointer =  Math.floor((left+right)/2);
    }
}
return pointer