function isMatch(s: string, p: string): boolean {
  let m = s.length + 1,
    n = p.length + 1,
    dp: boolean[][] = Array.from(Array(m), () => new Array(n).fill(false));
  dp[0][0] = true;
  // 初始化首行
  for (let j = 2; j < n; j += 2) {
    dp[0][j] = p[j - 1] === "*";
    if (!dp[0][j]) {
      break;
    }
  }
  // 状态转移
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (p[j - 1] === "*") {
        if (dp[i][j - 2]) {
          // 字符组合 p[j - 2] * 看作出现 0 次时，能否匹配
          dp[i][j] = true;
        } else if (dp[i - 1][j] && s[i - 1] === p[j - 2]) {
          // 字符 p[j - 2] 多出现 1 次时，能否匹配
          dp[i][j] = true;
        } else if (dp[i - 1][j] && p[j - 2] === ".") {
          // 字符 '.' 多出现 1 次时，能否匹配
          dp[i][j] = true;
        }
      } else {
        if (dp[i - 1][j - 1] && s[i - 1] == p[j - 1]) {
          dp[i][j] = true;
        } else if (dp[i - 1][j - 1] && p[j - 1] == ".") {
          dp[i][j] = true;
        }
      }
    }
  }
  return dp[m - 1][n - 1];
}

export default void 0;
