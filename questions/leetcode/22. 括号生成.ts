function generateParenthesis(n: number): string[] {
  let res: string[] = [];
  parenthesis("", n, n);
  return res;

  function parenthesis(
    str: string,
    leftParenthesis: number,
    rightParenthesis: number
  ): void {
    if (leftParenthesis > rightParenthesis) {
      return;
    }
    if (leftParenthesis === 0 && rightParenthesis === 0) {
      res.push(str);
      return;
    }
    if (leftParenthesis > 0) {
      parenthesis(str + "(", leftParenthesis - 1, rightParenthesis);
    }
    if (rightParenthesis > 0) {
      parenthesis(str + ")", leftParenthesis, rightParenthesis - 1);
    }
  }
}

export default void 0;
