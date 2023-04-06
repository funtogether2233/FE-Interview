function lengthOfLongestSubstring(s: string): number {
  const strArr = s.split(""),
    strMap: Map<string, number> = new Map();
  let res = 0;
  for (let repIndex = -1, i = 0; i < s.length; ++i) {
    if (strMap.has(strArr[i])) {
      repIndex = Math.max(repIndex, strMap.get(strArr[i])!);
    }
    strMap.set(strArr[i], i);
    res = Math.max(res, i - repIndex);
  }
  return res;
}

export default void 0;
