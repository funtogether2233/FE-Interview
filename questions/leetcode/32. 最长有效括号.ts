function longestValidParentheses(s: string): number {
  // dp
  //   const l = s.length,
  //     dp: number[] = new Array(l).fill(0);
  //   let res = 0;
  //   for (let i = 1; i < l; i++) {
  //     if (s[i] !== ")") {
  //       continue;
  //     }
  //     // s[i] === ")"
  //     if (s[i - 1] === "(") {
  //       dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
  //       // s[i - 1] === ")"，向前找有效括号对
  //     } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === "(") {
  //       dp[i] = dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
  //     }
  //     res = Math.max(res, dp[i]);
  //   }
  //   return res;
  // 栈
  //   const stack = [-1];
  //   let r = 0;
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] === "(") {
  //       stack.push(i);
  //       continue;
  //     }
  //     stack.pop();
  //     if (stack.length === 0) {
  //       stack.push(i);
  //     } else {
  //       r = Math.max(r, i - stack[stack.length - 1]);
  //     }
  //   }
  //   return r;

  // 计数
  const l = s.length;
  let left = 0,
    right = 0,
    res = 0;
  for (let i = 0; i < l; i++) {
    if (s[i] === "(") {
      left++;
    } else {
      // s[i] === ")"
      right++;
    }
    if (left === right) {
      res = Math.max(res, 2 * right);
    } else if (right > left) {
      left = right = 0;
    }
  }
  left = right = 0;
  for (let i = l - 1; i >= 0; i--) {
    if (s[i] === "(") {
      left++;
    } else {
      // s[i] === ")"
      right++;
    }
    if (left === right) {
      res = Math.max(res, 2 * left);
    } else if (left > right) {
      left = right = 0;
    }
  }
  return res;
}

export default void 0;
