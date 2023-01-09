/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let res = parseInt(s);
  if (isNaN(res)) {
    return 0;
  } else if (res < -2147483648) {
    return -2147483648;
  } else if (2147483647 < res) {
    return 2147483647;
  } else {
    return res;
  }
};
