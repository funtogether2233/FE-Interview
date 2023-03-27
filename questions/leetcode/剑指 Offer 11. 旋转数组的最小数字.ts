function minArray(numbers: number[]): number {
  // return Math.min(...numbers);
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (numbers[right] > numbers[middle]) {
      right = middle;
    } else if (numbers[right] < numbers[middle]) {
      left = middle + 1;
    } else {
      --right;
    }
  }
  return numbers[left];
}

export default void 0;
