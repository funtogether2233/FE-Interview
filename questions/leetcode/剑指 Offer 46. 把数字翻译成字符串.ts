function translateNum(num: number): number {
  let str = num.toString(),
    res = 0;
  dfs(str, 0);
  return res;

  function dfs(s: string, i: number) {
    if (i === str.length) {
      ++res;
      return;
    }
    // 尝试取一位，一定可以
    dfs(s.slice(1, s.length), i + 1);
    // 尝试取两位，要求处于 1-25 之间
    if (s.length >= 2 && (s[0] === "1" || (s[0] === "2" && s[1] < "6"))) {
      dfs(s.slice(2, s.length), i + 2);
    }
  }
}

export default void 0;
