/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let i = x >> 1;
  while (1) {
    if (i * i > x) {
      i = i >> 1;
    } else {
      if ((i + 1) * (i + 1) > x) {
        return i;
      } else {
        ++i;
      }
    }
  }
  return i;
};
