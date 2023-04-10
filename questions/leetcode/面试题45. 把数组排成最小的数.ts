function minNumber(nums: number[]): string {
  return nums
    .map((val) => `${val}`)
    .sort((a, b) => (a + b > b + a ? 1 : -1))
    .join("");
}

export default void 0;
