function isValid(s: string): boolean {
  if (s.length % 2 === 1) {
    return false;
  }
  const pairs: Map<string, string> = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stk: Array<string> = [];
  for (const ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  }
  return !stk.length;
}
