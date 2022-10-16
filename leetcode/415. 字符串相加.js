/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const res = [];
  for (
    let i = num1.length - 1, j = num2.length - 1, add = 0;
    i >= 0 || j >= 0 || add != 0;
    i--, j--
  ) {
    const x = i >= 0 ? num1[i] - "0" : 0,
      y = j >= 0 ? num2[j] - "0" : 0,
      result = x + y + add;
    res.unshift(result % 10);
    add = Math.floor(result / 10);
  }
  return res.join("");
};
