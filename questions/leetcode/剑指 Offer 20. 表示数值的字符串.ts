function isNumber(s: string): boolean {
  // 正则
  // s = s.trim();
  // return /^(\+|\-)?(\d+(\.\d*)?|\.\d+)((e|E)(\+|\-)?\d+)?$/.test(s);

  // 有限状态自动机
  // ' ' 空格 's' 正负号 'd' 数字 '.' 小数点 'e' 幂符号
  // 0 开始的空格
  // 1 幂符号前的正负号
  // 2 小数点前的数字
  // 3 小数点、小数点后的数字
  // 4 当小数点前为空格时，小数点、小数点后的数字
  // 5 幂符号
  // 6 幂符号后的正负号
  // 7 幂符号后的数字
  // 8 结尾的空格
  // 合法的结束状态有 2, 3, 7, 8 。
  const success = [2, 3, 7, 8];
  const states: Map<string, number>[] = [
    new Map([
      [" ", 0],
      ["s", 1],
      ["d", 2],
      [".", 4],
    ]), // 0.
    new Map([
      ["d", 2],
      [".", 4],
    ]), // 1.
    new Map([
      ["d", 2],
      [".", 3],
      ["e", 5],
      [" ", 8],
    ]), // 2.
    new Map([
      ["d", 3],
      ["e", 5],
      [" ", 8],
    ]), // 3.
    new Map([["d", 3]]), // 4.
    new Map([
      ["s", 6],
      ["d", 7],
    ]), // 5.
    new Map([["d", 7]]), // 6.
    new Map([
      ["d", 7],
      [" ", 8],
    ]), // 7.
    new Map([[" ", 8]]), // 8.
  ];
  let p = 0,
    t: string;
  for (let c of s) {
    if (c >= "0" && c <= "9") {
      t = "d";
    } else if (c == "+" || c == "-") {
      t = "s";
    } else if (c == "e" || c == "E") {
      t = "e";
    } else if (c == "." || c == " ") {
      t = c;
    } else {
      t = "?";
    }
    if (!states[p].has(t)) {
      return false;
    }
    p = states[p].get(t)!;
  }
  return success.includes(p);
}

export default void 0;
