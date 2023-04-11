function strToInt(str: string): number {
  str = str.trim();
  if (str.length === 0) {
    return 0;
  }
  const INT_MAX = Math.pow(2, 31) - 1,
    INT_MIN = -Math.pow(2, 31);
  let res: number = 0,
    i = 0,
    flag = false;
  if (str[0] === "-") {
    flag = true;
    ++i;
  } else if (str[0] === "+") {
    ++i;
  }
  for (; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") {
      break;
    }
    res = res * 10 + parseInt(str[i]);
  }
  if (flag) {
    res = -res;
    res = res < INT_MIN ? INT_MIN : res;
  } else {
    res = res > INT_MAX ? INT_MAX : res;
  }
  return res;
}

export default void 0;
