// 最长公共子序列
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length
    const n = text2.length
    const x = text1
    const y = text2
    //生成二维数组
    function newTable(m, n) {
        let arr = [];
        for (let i = 0; i < m; i++) {
            let arrInside = [];
            for (let j = 0; j < n; j++) {
                arrInside.push(0);
            }
            arr.push(arrInside);
        }
        return arr;
    }
    const tableLen = newTable(m+1,n+1) // 记录lcs的长度
    for (let i = 1; i < m + 1; i++){
        for (let j = 1; j < n + 1; j++) {
            if(x[i-1]===y[j-1]){
                tableLen[i][j] = tableLen[i-1][j-1] + 1
            }else{
                if(tableLen[i-1][j]>=tableLen[i][j-1]){
                    tableLen[i][j] = tableLen[i-1][j]
                }else{
                    tableLen[i][j] = tableLen[i][j-1]
                }
            }
        }
    }
    return tableLen[m][n]
};