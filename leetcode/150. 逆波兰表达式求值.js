/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const s = new Map([
    ["+", (a, b) => +b + +a],
    ["-", (a, b) => b - a],
    ["*", (a, b) => b * a],
    ["/", (a, b) => Math.trunc(b / a)],
  ]);
  const stack = [];
  for (const i of tokens) {
    if (!s.has(i)) {
      stack.push(i);
    } else {
      stack.push(s.get(i)(stack.pop(), stack.pop()));
    }
  }
  return stack.pop();
};
