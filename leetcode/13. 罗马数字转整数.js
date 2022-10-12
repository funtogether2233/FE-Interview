/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ans = 0;
  let a = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    if (a[s[i]] >= a[s[i + 1]] || i === s.length - 1) ans += a[s[i]];
    else ans -= a[s[i]];
  }
  return ans;
};
