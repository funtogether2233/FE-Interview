function getLeastNumbers(arr: number[], k: number): number[] {
  // const nums = Array.from(arr);
  // arr.sort((a, b) => a - b);
  // return arr.slice(0, k);

  if (k === 0) {
    return [];
  }
  return arr.slice(0, quickSelect(arr, 0, arr.length - 1, k - 1) + 1);

  function quickSelect(
    arr: number[],
    left: number,
    right: number,
    target: number
  ): number {
    let pivot = randomPartition(arr, left, right);
    if (pivot === target) {
      return pivot;
    }
    if (pivot < target) {
      return quickSelect(arr, pivot + 1, right, target);
    }
    return quickSelect(arr, left, pivot - 1, target);
  }

  function randomPartition(arr: number[], left: number, right: number): number {
    let pivot = Math.floor(Math.random() * (right - left) + left);
    [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
    let i = left;
    for (let j = left; j < right; ++j) {
      if (arr[j] < arr[right]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        ++i;
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
  }
}

export default void 0;
