function lengthOfLongestSubstring(s: string): number {
  const occ = new Set<string>(),
    n = s.length;
  let rk = 0,
    res = 0;
  for (let i = 0; i < n && rk < n; ++i) {
    if (i !== 0) {
      occ.delete(s[i - 1]);
    }
    while (rk < n && !occ.has(s[rk])) {
      occ.add(s[rk++]);
    }
    res = Math.max(res, rk - i);
  }
  return res;
}

export default void 0;
