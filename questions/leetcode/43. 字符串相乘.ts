function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  const l1 = num1.length,
    l2 = num2.length;
  let res: number[] = new Array(l1 + l2).fill(0);
  for (let i = l1 - 1; i >= 0; --i) {
    let n1 = +num1[i];
    for (let j = l2 - 1; j >= 0; --j) {
      let n2 = +num2[j];
      res[i + j + 1] += n1 * n2;
      res[i + j] += Math.floor(res[i + j + 1] / 10);
      res[i + j + 1] %= 10;
    }
  }
  if (res[0] === 0) {
    res.shift();
  }
  return res.join("");
}

export default void 0;
