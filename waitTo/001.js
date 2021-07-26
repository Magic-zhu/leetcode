/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    s = Math.abs(x).toString()
    let r =''
    for(let i=s.length-1;i>=0;i--){r += s[i]}
    if(r<=2147483647){return x<0?-r:r}else{return 0}
}