// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return function curryInner(...args) {
    if (args.length >= fn.length && !args.includes(curry.placeholder)) {
      return fn(...args);
    }
    return (...args2) =>
      curryInner(
        ...args.map((a) => (a === curry.placeholder ? args2.shift() : a)),
        ...args2
      );
  };
}

curry.placeholder = Symbol();
