// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return function curryInner(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...args2) => curryInner(...args, ...args2);
  };
}
