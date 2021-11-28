/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;
  let tempMax = 0;
  const search = (x, y) => {
    if (grid[y][x] === 1) {
      tempMax += 1;
    }
    if (grid[y][x] === 0) {
      grid[y][x] = 2; //标记已经搜索过
      return;
    }
    grid[y][x] = 2; //标记已经搜索过
    if (x - 1 > -1 && grid[y][x - 1] === 1) {
      search(x - 1, y);
    }
    if (x + 1 < grid[y].length && grid[y][x + 1] === 1) {
      search(x + 1, y);
    }
    if (y - 1 > -1 && grid[y - 1][x] === 1) {
      search(x, y - 1);
    }
    if (y + 1 < grid.length && grid[y + 1][x] === 1) {
      search(x, y + 1);
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      tempMax = 0;
      if (grid[i][j] === 2) {
        continue;
      }
      search(j, i);
      max = Math.max(max, tempMax);
    }
  }
  return max;
};
