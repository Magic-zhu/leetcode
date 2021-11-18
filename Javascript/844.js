/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    const split = (r) =>{
        while(r.indexOf('#')!==-1){
            r = r.replace(/(.{1})?#/,'')
        }
        return r
    }
    return split(s)===split(t)
};