function permutation(s: string): string[] {
  // 排序让同字母相邻
  const sortStr = s
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
  const res: string[] = [];
  __traverse(sortStr, "");
  return res;

  function __traverse(str: string, cur: string) {
    if (str.length === 0) {
      res.push(cur);
      return;
    }
    for (let i = 0; i < str.length; ++i) {
      cur += str[i];
      __traverse(str.slice(0, i) + str.slice(i + 1), cur);
      cur = cur.slice(0, -1);
      while (str[i] === str[i + 1]) {
        ++i;
      }
    }
  }

  // const str = s.split("").sort((a, b) => (a > b ? 1 : -1));
  // const res: string[] = [];
  // backtrack(str.length, 0);
  // return res;

  // function backtrack(n: number, first: number) {
  //   if (first === n) {
  //     res.push(str.join(""));
  //   }
  //   for (let i = first; i < n; ++i) {
  //     [str[first], str[i]] = [str[i], str[first]];
  //     backtrack(n, first + 1);
  //     [str[first], str[i]] = [str[i], str[first]];
  //     while (str[i] === str[i + 1]) {
  //       ++i;
  //     }
  //   }
  // }
}

export default void 0;
