/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0)  return [];
    let result = [];
    let l = matrix[0].length;
    let m = matrix.length;
    let n = l <= m ? l : m;
    for (let i = 0; i < (n + 1) / 2 - 1; i++) {
        let s = 0;
        while (s < l - i * 2 - 1) {
            result.push(matrix[i][i + s]);
            s++;
        }
        s = 0;
        while (s < m - i * 2 - 1) {
            result.push(matrix[i + s][l - 1 - i]);
            s++;
        }
        s = 0;
        while (s < l - i * 2 - 1) {
            result.push(matrix[m - 1 - i][l - 1 - i - s]);
            s++;
        }
        s = 0;
        while (s < m - i * 2 - 1) {
            result.push(matrix[m - 1 - i - s][i]);
            s++;
        }
    }
    if(n%2==0){
        return  result
    }
    if (l >= m) {
        let q = Math.floor((m + 1) / 2) - 1;
        let s = l - q * 2;
        for (let i = 0; i < s; i++) {
            result.push(matrix[(m + 1) / 2 - 1][q + i]);
        }
    }
    if (m > l) {
        let q = Math.floor((l + 1) / 2) - 1;
        let s = m - q * 2;
        for (let i = 0; i < s; i++) {
            result.push(matrix[q + i][(l + 1) / 2 - 1]);
        }
    }
    return result
};