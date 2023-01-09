/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let sum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    sum +=
      (columnTitle[columnTitle.length - i - 1].charCodeAt() -
        "A".charCodeAt() +
        1) *
      26 ** i;
  }
  return sum;
};
