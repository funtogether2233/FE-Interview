function calculate(s: string): number {
  const exp = s.replace(/\s/g, ``),
    stack: number[] = [],
    sym = new Set(["+", "-", "*", "/"]);
  let i = 0,
    n = exp.length,
    sign = `+`;
  while (i < n) {
    if (sym.has(exp[i])) {
      sign = exp[i++];
    } else {
      let num = 0;
      while (i < n && !sym.has(exp[i])) {
        num = num * 10 + +exp[i++];
      }
      if (sign === `+`) {
        stack.push(num);
      } else if (sign === `-`) {
        stack.push(-num);
      } else if (sign === `*`) {
        let x = stack.pop() as number;
        stack.push(x * num);
      } else if (sign === `/`) {
        let x = stack.pop() as number;
        stack.push(x / num > 0 ? Math.floor(x / num) : Math.ceil(x / num)); // 负数向上取整，正数向下取整
      }
    }
  }
  return stack.reduce((pre, curr) => pre + curr, 0);
}

export default void 0;
