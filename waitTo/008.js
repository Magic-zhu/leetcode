//最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-common-prefix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let r = strs[0] ? strs[0]:'';
    let l = strs.length;
    for (let i=1;i<l;i++){
        while (strs[i].indexOf(r)==-1||strs[i].indexOf(r)!=0){
           r = r.slice(0,-1);
        }
    }
    return r;
};
