/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let res = s.match(/[a-zA-Z0-9]/g);
  return (
    res?.toString().toUpperCase() === res?.reverse().toString().toUpperCase()
  );
};
