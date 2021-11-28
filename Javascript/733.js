// ^ 图像渲染
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const originColor = image[sr][sc];
  if (originColor === newColor) return image;
  const draw = (x, y) => {
    image[y][x] = newColor;
    if (x - 1 > -1 && image[y][x - 1] === originColor) {
      draw(x - 1, y);
    }
    if (x + 1 < image[y].length && image[y][x + 1] === originColor) {
      draw(x + 1, y);
    }
    if (y - 1 > -1 && image[y - 1][x] === originColor) {
      draw(x, y - 1);
    }
    if (y + 1 < image.length && image[y + 1][x] === originColor) {
      draw(x, y + 1);
    }
  };
  draw(sc, sr);
  return image;
};
