/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 使用环形链表的思想 说明出现闭环 退出循环
  if (getN(n) == 1) return true;
  let a = getN(n),
    b = getN(getN(n));
  // 如果 a === b
  while (b !== 1 && getN(b) !== 1 && a !== b) {
    a = getN(a);
    b = getN(getN(b));
  }
  return b === 1 || getN(b) === 1;
};

function getN(n) {
  if (n == 1 || n == 0) return n;
  let res = 0;
  while (n) {
    res += (n % 10) * (n % 10);
    n = parseInt(n / 10);
  }
  return res;
}

var isHappy = function (n) {
  const sumSet = new Set();
  while (n != 1 && !sumSet.has(n)) {
    sumSet.add(n);
    n = getN(n);
  }
  return n == 1;
};
