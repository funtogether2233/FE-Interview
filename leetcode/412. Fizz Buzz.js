/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (!(i % 15)) {
      answer[i - 1] = "FizzBuzz";
    } else if (!(i % 3)) {
      answer[i - 1] = "Fizz";
    } else if (!(i % 5)) {
      answer[i - 1] = "Buzz";
    } else {
      answer[i - 1] = i.toString();
    }
  }
  return answer;
};
