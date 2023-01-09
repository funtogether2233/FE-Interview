class CQueue {
  inStack: number[];
  outStack: number[];

  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  appendTail(value: number): void {
    this.inStack.push(value);
  }

  deleteHead(): number {
    if (!this.outStack.length) {
      if (!this.inStack.length) {
        return -1;
      }
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop() as number);
      }
    }
    return this.outStack.pop() as number;
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
