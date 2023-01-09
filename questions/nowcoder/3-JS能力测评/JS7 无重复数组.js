const _getUniqueNums = (start, end, n) => {
  const res = [];
  while (n--) {
    let tmp = Math.floor(Math.random() * (end - start + 1) + start);
    if (res.indexOf(tmp) === -1) {
      res.push(tmp);
    }
  }
  return res;
};
