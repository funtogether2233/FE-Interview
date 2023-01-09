function thousandSeparator(n: number): string {
  //   let res = n.toString().split("");
  //   for (let i = res.length - 4; i >= 0; i = i - 3) {
  //     res.splice(i + 1, 0, ".");
  //   }
  //   return res.join("");

  let res: string[] = [];
  while (true) {
    let tmp = (n % 1000).toString();
    n = Math.floor(n / 1000);
    if (!n) {
      res.push(tmp);
      break;
    }
    res.push(tmp.padStart(3, "0"));
    res.push(".");
  }
  return res.reverse().join("");
}
