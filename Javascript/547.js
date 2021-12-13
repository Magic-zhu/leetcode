/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
  const grid = isConnected;
  const len = grid.length;
  let r = 0;
  let headMap = {}
  function find(i){
    for(let j = 0; j < len;j++){
        if(i===j||headMap[j]===1) continue
        if(grid[i][j]===1){
            headMap[j] = 1
            find(j)
        }
    }
  }
  for(let i = 0 ; i < len;i++){
      if(headMap[i]===1) continue
      headMap[i] = 1
      find(i)
      r++
  }
  return r
};
