/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let m = 0;
  let n = 0;
  let map = {};
  let max = 0;
  let current = 0;
  for (let m = 0; m < s.length; m++) {
    for (let n = m; n < s.length; n++) {
      if (map[s.charCodeAt(n)] !== 1) {
        map[s.charCodeAt(n)] = 1;
        current++;
      } else {
        // 恢复跳出
        max = Math.max(max, current);
        map = {};
        current = 0;
        break;
      }
    }
  }
  return Math.max(current, max);
};
