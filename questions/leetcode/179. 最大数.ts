function largestNumber(nums: number[]): string {
  const numsStr = nums.map((a) => a.toString());
  numsStr.sort((a, b) => {
    return +(b + a) - +(a + b);
  });
  if (numsStr[0] === "0") {
    return "0";
  }
  return numsStr.join("");
}

export default void 0;
