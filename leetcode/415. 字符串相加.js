/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  //   const res = [];
  //   for (
  //     let i = num1.length - 1, j = num2.length - 1, add = 0;
  //     i >= 0 || j >= 0 || add != 0;
  //     i--, j--
  //   ) {
  //     const x = i >= 0 ? num1[i] - "0" : 0,
  //       y = j >= 0 ? num2[j] - "0" : 0,
  //       result = x + y + add;
  //     res.unshift(result % 10);
  //     add = Math.floor(result / 10);
  //   }
  //   return res.join("");

  //第二次写
  const res = [];
  let add = 0,
    l1 = num1.length - 1,
    l2 = num2.length - 1;
  while (l1 >= 0 || l2 >= 0 || add !== 0) {
    const a = num1[l1] ? +num1[l1--] : 0,
      b = num2[l2] ? +num2[l2--] : 0,
      result = a + b + add;
    res.unshift(result % 10);
    add = Math.floor(result / 10);
  }
  return res.join("");
};
