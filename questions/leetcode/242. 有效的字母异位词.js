/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const tmp = new Array(26).fill(0),
    base = "a".charCodeAt();
  for (let i = 0; i < s.length; i++) {
    tmp[s[i].charCodeAt() - base]++;
    tmp[t[i].charCodeAt() - base]--;
  }
  for (let i = 0; i < 26; i++) {
    if (tmp[i] !== 0) {
      return false;
    }
  }
  return true;
};
