function simplifyPath(path: string): string {
  // 正则匹配分隔, 然后遍历
  const dir: string[] = path.match(/\/([^\/]+)/g) || [];
  // console.log(dir)
  const parsed = dir.reduce((arr: string[], cur: string) => {
    if (cur === "/..") {
      arr.pop();
    } else if (cur === "/.") {
      // do nothing
    } else {
      arr.push(cur);
    }
    return arr;
  }, [] as string[]);

  // console.log(parsed)
  return parsed.join("") || "/";
}

export default void 0;
