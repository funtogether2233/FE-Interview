function decodeString(s: string): string {
  const res: string[] = [],
    timeList: number[] = [];
  let str = "",
    num = 0;
  for (let i = 0; i < s.length; ++i) {
    if (!isNaN(+s[i])) {
      num = num * 10 + +s[i];
    } else if (s[i] === "[") {
      timeList.push(num);
      res.push(str);
      str = "";
      num = 0;
    } else if (s[i] === "]") {
      str = res.pop() + str.repeat(timeList.pop() as number);
    } else {
      str += s[i];
    }
  }
  return str;
}

export default void 0;
