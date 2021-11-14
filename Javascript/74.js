/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let row  = 0
    for (let i = 0;i < matrix.length-1;i++){
        const len = matrix[i].length
        if(matrix[i][len-1]>target){
            break
        }
        if(matrix[i][len-1]<target && matrix[i+1][len-1]>=target){
            row = i + 1
            break
        }
    }
    for(let j = 0;j<matrix[row].length;j++){
        if(matrix[row][j]===target){
            return true
        }
    }
    return false
};