/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [],
    path = [];
  const backtracking = (i) => {
    if (i >= s.length) {
      res.push(Array.from(path));
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        path.push(s.substr(i, j - i + 1));
        backtracking(j + 1);
        path.pop();
      }
    }
  };
  const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        return false;
      }
    }
    return true;
  };
  backtracking(0);
  return res;
};
