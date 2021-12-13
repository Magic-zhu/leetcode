/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  const search = (x, y) => {
      if (grid[y][x] === '0') {
          grid[y][x] = '2'; //标记已经搜索过
          return;
      }
      grid[y][x] = '2'; //标记已经搜索过
      if (x - 1 > -1 && grid[y][x - 1] === '1') {
          search(x - 1, y);
      }
      if (x + 1 < grid[y].length && grid[y][x + 1] === '1') {
          search(x + 1, y);
      }
      if (y - 1 > -1 && grid[y - 1][x] === '1') {
          search(x, y - 1);
      }
      if (y + 1 < grid.length && grid[y + 1][x] === '1') {
          search(x, y + 1);
      }
  };
  const row = grid.length;
  const col = grid[0]?grid[0].length:0;
  let r = 0;
  for(let i = 0 ; i < row;i++){
      for(let j = 0; j < col;j++){
          if(grid[i][j]!=='2' && grid[i][j]!=='0'){
              search(j,i)
              r++;
          }
      }
  }
  return r
};
