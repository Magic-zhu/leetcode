/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // * 实现的不好
  let map = {};
  for (let i = 0; i < s1.length; i++) {
    if (map[s1[i]]) {
      map[s1[i]] = map[s1[i]] + 1;
    } else {
      map[s1[i]] = 1;
    }
  }
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    let t = s2.substring(i, s1.length + i);
    let mapt = {};
    for (let i = 0; i < s1.length; i++) {
      if (mapt[t[i]]) {
        mapt[t[i]] = mapt[t[i]] + 1;
      } else {
        mapt[t[i]] = 1;
      }
    }
    let temp = true;
    for (key in map) {
      if (map[key] !== mapt[key]) {
        temp = false;
        break;
      }
    }
    if (temp) return true;
  }
  return false;
};
