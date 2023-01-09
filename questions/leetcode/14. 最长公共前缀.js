/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longest = "",
    l = 205,
    ans = "";
  for (let i = 0; i < strs.length; i++) {
    if (i === 0) {
      longest = strs[0];
      l = strs[0].length;
    } else {
      if (l > strs[i].length) {
        l = strs[i].length;
      }
      for (let j = 0; j < strs[i].length && j < l; j++) {
        if (strs[i][j] !== longest[j]) {
          l = j;
          break;
        }
      }
    }
  }
  if (l === 0) {
    return ans;
  } else {
    ans = longest.substring(0, l);
  }
  return ans;
};
