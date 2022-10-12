/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let kh = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      kh.push(map[s[i]]);
    } else {
      if (kh.pop() !== s[i]) return false;
    }
  }
  return !kh.length;
};
