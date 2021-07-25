/**
 *  278题 第一个错误的版本
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1; // 左指针起始位
        let right = n; // 右指针起始位
        if(isBadVersion(1)) return left; // 判定条件是左边good右边bad return右边 所以这里剔除一下第一个
        let  pointer = Math.floor((right-left)/2)+left;
        while(right-left>1){
            if(isBadVersion(pointer)){
                right = pointer;
            }else if(!isBadVersion(pointer)){
                left = pointer; 
            }
            pointer = Math.floor((right-left)/2)+left;
        }
        return right       
    };
};