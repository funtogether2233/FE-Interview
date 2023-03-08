function letterCombinations(digits: string): string[] {
  // 递归
  // let res: string[] = [],
  //   n = digits.length;
  // if (digits.length === 0) {
  //   return res;
  // }
  // //建立数字与字母的映射关系
  // const map = new Map([
  //   ["0", ""],
  //   ["1", ""],
  //   ["2", "abc"],
  //   ["3", "def"],
  //   ["4", "ghi"],
  //   ["5", "jkl"],
  //   ["6", "mno"],
  //   ["7", "pqrs"],
  //   ["8", "tuv"],
  //   ["9", "wxyz"],
  // ]);
  // DFS("", 0);
  // return res;
  // //递归调用搜索
  // function DFS(curStr: string, i: number): void {
  //   //curStr 当前的字符串 i:指针的指向
  //   if (i >= n) {
  //     //指针越界 递归出口
  //     res.push(curStr);
  //     return;
  //   }
  //   let letters = map.get(digits[i]) as string;
  //   for (let letter of letters) {
  //     DFS(curStr + letter, i + 1); //组成新的字符串，指针向后移动一位，继续递归
  //   }
  // }

  // BFS：广度优先搜索
  let n = digits.length;
  if (n === 0) {
    return [];
  }
  const map = new Map([
    ["0", ""],
    ["1", ""],
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  const res= [""];
  for (let i = 0; i < n; i++) {
    const nodeSize = res.length; //当前层的节点数
    for (let j = 0; j < nodeSize; j++) {
      //当前层的每一个节点都出列
      const curStr = res.shift();
      const letters = map.get(digits[i]) as string;
      for (let letter of letters) {
        res.push(curStr + letter);
      }
    }
  }
  return res;
}

export default void 0;
