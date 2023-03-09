function restoreIpAddresses(s: string): string[] {
  // segment 段
  const SEG_COUNT = 4,
    segments: number[] = new Array(SEG_COUNT),
    res: string[] = [];
  dfs(s, 0, 0);
  return res;

  function dfs(s: string, segId: number, segStart: number) {
    const length = s.length;
    // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
    if (segId === SEG_COUNT) {
      if (segStart === length) {
        res.push(segments.join("."));
      }
      return;
    }
    // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
    if (segStart === length) {
      return;
    }
    // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
    if (s[segStart] === "0") {
      segments[segId] = 0;
      dfs(s, segId + 1, segStart + 1);
      return;
    }
    // 一般情况，枚举每一种可能性并递归
    let addr = 0;
    for (let segEnd = segStart; segEnd < length; ++segEnd) {
      addr = addr * 10 + +s[segEnd];
      if (addr <= 0 || addr > 0xff) {
        return;
      }
      segments[segId] = addr;
      dfs(s, segId + 1, segEnd + 1);
    }
  }
}

export default void 0;
