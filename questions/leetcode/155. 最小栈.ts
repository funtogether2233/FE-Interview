class MinStack {
  // stack: number[];
  // minStack: number[];

  // constructor() {
  //   this.stack = [];
  //   this.minStack = [Infinity];
  // }

  // push(val: number): void {
  //   this.stack.push(val);
  //   this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
  // }

  // pop(): void {
  //   this.stack.pop();
  //   this.minStack.pop();
  // }

  // top(): number {
  //   return this.stack[this.stack.length - 1];
  // }

  // getMin(): number {
  //   return this.minStack[this.minStack.length - 1];
  // }

  // 不使用额外空间
  stack: number[] = [];
  min: number = 0;

  constructor() {}

  push(val: number): void {
    if (this.stack.length === 0) {
      this.stack.push(0);
      this.min = val;
    } else {
      this.stack.push(val - this.min);
      this.min = Math.min(val, this.min);
    }
  }

  pop(): void {
    let diff = this.stack.pop() as number;
    if (diff >= 0) {
      //return min + diff;
    } else {
      let res = this.min;
      this.min = this.min - diff;
      //return res;
    }
  }

  top(): number {
    let diff = this.stack[this.stack.length - 1];
    if (diff >= 0) {
      return this.min + diff;
    } else {
      return this.min;
    }
  }

  getMin(): number {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export default void 0;
