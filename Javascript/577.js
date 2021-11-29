/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    var reverseString = function(s) {
        let t = ''
        for(let i = 0;i<s.length;i++){
            t+=s[s.length-1-i]
        }
        return t
    };
    let a = s.split(' ')
    return a.map(t=>reverseString(t)).join(' ')
};