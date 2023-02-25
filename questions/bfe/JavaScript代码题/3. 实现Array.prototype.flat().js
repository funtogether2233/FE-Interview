// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  const result = [],
    stack = [...arr.map((item) => [item, depth])];
  while (stack.length > 0) {
    const [top, depth] = stack.pop();
    if (Array.isArray(top) && depth > 0) {
      stack.push(...top.map((item) => [item, depth - 1]));
    } else {
      result.push(top);
    }
  }
  return result.reverse();
}
