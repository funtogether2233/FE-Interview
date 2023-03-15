function reverseWords(s: string): string {
  // let res = s
  //   .split(" ")
  //   .reverse()
  //   .filter((i) => i.trim());
  // return res.join(" ");

  // 双端队列
  let left = 0,
    right = s.length - 1;
  // 去掉字符串开头末尾的空白字符
  while (left <= right && s[left] === " ") {
    ++left;
  }
  while (left <= right && s[right] === " ") {
    --right;
  }
  let d: string[] = [];
  let word: string = "";
  while (left <= right) {
    let c = s[left];
    if (word.length !== 0 && c === " ") {
      // 将单词 push 到队列的头部
      d.unshift(word);
      word = "";
    } else if (c !== " ") {
      word += c;
    }
    ++left;
  }
  d.unshift(word);
  return d.join(" ");
}

export default void 0;
