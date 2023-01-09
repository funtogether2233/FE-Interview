/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  //   let res = [],
  //     output = [];
  //   for (num of nums) {
  //     output.push(num);
  //   }
  //   const backtrack = (n, first) => {
  //     if (first == n) {
  //       res.push(Array.from(output));
  //       return;
  //     }
  //     for (let i = first; i < n; i++) {
  //       [output[first], output[i]] = [output[i], output[first]];
  //       backtrack(n, first + 1);
  //       [output[first], output[i]] = [output[i], output[first]];
  //     }
  //   };
  //   backtrack(nums.length, 0);
  //   return res;

  // 第二次写，没想出来，抄了一遍
  let res = [],
    output = [];
  for (const num of nums) {
    output.push(num);
  }
  const backtrack = (n, first) => {
    if (first == n) {
      res.push(Array.from(output));
      return;
    }
    for (let i = first; i < n; i++) {
      [output[first], output[i]] = [output[i], output[first]];
      backtrack(n, first + 1);
      [output[first], output[i]] = [output[i], output[first]];
    }
  };
  backtrack(nums.length, 0);
  return res;
};
