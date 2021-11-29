// 11. 盛最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = 0
    let max1 = 0
    let max2 = 0
    let l = 0
    let r = 0
    for(let i=0; i<height.length; i++){
        if(height[i]> max1 ){
            max2 = max1
            max1 = height[i]
            l = i
            continue
        }
        if(height[i]> max2 && height[i]<=max1){
            max2 = height[i]
            r = i
        }
    }
    if(l > r) l = [l,r = l][0]
    max = (r-l)*Math.min(height[l],height[r])
    while(l>=0){
        max = Math.max(max,(r-l)*Math.min(height[l],height[r]))
        let a = r
        while(a<=height.length-1){
            max = Math.max(max,(a-l)*Math.min(height[l],height[a]))
            a++
        }
        l--
    }
    return max
};