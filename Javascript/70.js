/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const table = {}
    table[1] = 1
    table[2] = 2
    let t = 3
    while(t<=n){
        table[t] = table[t-1] + table[t-2]
        t++
    }
    return table[n]
};