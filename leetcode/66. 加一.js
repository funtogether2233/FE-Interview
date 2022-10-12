/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1;
  if (++digits[i] >= 10) {
    do {
      digits[i] -= 10;
      if (i !== 0) {
        ++digits[--i];
      } else {
        digits.unshift(1);
      }
    } while (i >= 0 && digits[i] >= 10);
  }
  return digits;
};
