function reverseWords(s: string): string {
  const str = s.split(" ");
  return str
    .filter((a) => a !== "")
    .reverse()
    .join(" ")
    .trim();

  // const str = s.split(" ");
  // let l = 0,
  //   r = str.length - 1,
  //   res = "";
  // while (l <= r) {
  //   [str[l], str[r]] = [str[r], str[l]];
  //   ++l;
  //   --r;
  // }
  // for (let s of str) {
  //   if (s === "") {
  //     continue;
  //   }
  //   res += s + " ";
  // }
  // return res.trim();
}

export default void 0;
