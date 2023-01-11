function isPalindrome(x: number): boolean {
  return x.toString() === x.toString().split("").reverse().join("").toString();
}

export default void 0;
