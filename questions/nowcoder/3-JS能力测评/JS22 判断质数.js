// 描述
// 请补全JavaScript代码，要求在Number对象的原型对象上添加"_isPrime"函数，该函数判断调用的对象是否为一个质数，是则返回true，否则返回false。
Number.prototype._isPrime = function (num) {
  for (let i = 2; i < Math.sqrt(num); ++i) {
    if (!num % i) {
      return false;
    }
  }
  return true;
};
