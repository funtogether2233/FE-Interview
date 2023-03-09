function longestCommonPrefix(strs: string[]): string {
  // 横向扫描
  // const n = strs.length;
  // if (n === 0) {
  //   return "";
  // }
  // let prefix = strs[0];
  // for (let i = 1; i < n; i++) {
  //   prefix = lcp(prefix, strs[i]);
  //   if (prefix.length === 0) {
  //     break;
  //   }
  // }
  // return prefix;

  // function lcp(prefix: string, str: string): string {
  //   const length = Math.min(prefix.length, str.length);
  //   let index = 0;
  //   while (index < length && prefix[index] == str[index]) {
  //     ++index;
  //   }
  //   return prefix.slice(0, index);
  // }

  // 横向扫描
  // const n = strs.length;
  // if (n === 0) {
  //   return "";
  // }
  // let length = strs[0].length;
  // for (let i = 0; i < length; i++) {
  //   let c = strs[0][i];
  //   for (let j = 1; j < n; j++) {
  //     if (i >= strs[j].length || strs[j][i] !== c) {
  //       return strs[0].slice(0, i);
  //     }
  //   }
  // }
  // return strs[0];

  const n = strs.length;
  if (n === 0) {
    return "";
  }
  strs.sort();
  const start = strs[0],
    end = strs[n - 1],
    minLength = Math.min(start.length, end.length);
  let i = 0;
  while (i < minLength && start[i] === end[i]) {
    ++i;
  }
  return start.slice(0, i);
}

export default void 0;
