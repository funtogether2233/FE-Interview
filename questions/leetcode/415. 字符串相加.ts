function addStrings(num1: string, num2: string): string {
  const res = [];
  let add = 0,
    l1 = num1.length - 1,
    l2 = num2.length - 1;
  while (l1 >= 0 || l2 >= 0 || add !== 0) {
    const a = num1[l1] ? +num1[l1--] : 0,
      b = num2[l2] ? +num2[l2--] : 0,
      result = a + b + add;
    res.unshift(result % 10);
    add = Math.floor(result / 10);
  }
  return res.join("");
}

export default void 0;
