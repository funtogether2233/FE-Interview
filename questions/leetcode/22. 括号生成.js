/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  const parenthesis = (str, left, right) => {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    } else if (left === right) {
      parenthesis(str + "(", left - 1, right);
    } else {
      if (left > 0) {
        parenthesis(str + "(", left - 1, right);
      }
      parenthesis(str + ")", left, right - 1);
    }
  };
  parenthesis("", n, n);
  return res;
};
