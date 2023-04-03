function verifyPostorder(postorder: number[]): boolean {
  // return recur(postorder, 0, postorder.length - 1);

  // function recur(postorder: number[], left: number, right: number): boolean {
  //   if (left >= right) {
  //     return true;
  //   }
  //   let p = left;
  //   while (postorder[p] < postorder[right]) {
  //     p++;
  //   }
  //   let m = p;
  //   while (postorder[p] > postorder[right]) {
  //     p++;
  //   }
  //   return (
  //     p == right &&
  //     recur(postorder, left, m - 1) &&
  //     recur(postorder, m, right - 1)
  //   );
  // }

  // 辅助单调栈
  const stack: number[] = [];
  let root = Number.MAX_SAFE_INTEGER;
  for (let i = postorder.length - 1; i >= 0; --i) {
    if (postorder[i] > root) {
      return false;
    }
    while (stack.length !== 0 && stack[stack.length - 1] > postorder[i]) {
      root = stack.pop() as number;
    }
    stack.push(postorder[i]);
  }
  return true;
}

export default void 0;
