/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString().split("").reverse().join("");
    return x==y
}

var isPalindrome_type2 = function(x) {
    x =  x.toString();
    let l =x.length;
    let t = Math.floor(x.length/2);
    for(let i = 0;i<t;i++){
        if(x.charAt(i)!==x.charAt(l-1-i)){
            return false
        }
    }
    return true
}



console.log(isPalindrome_type2(-121))