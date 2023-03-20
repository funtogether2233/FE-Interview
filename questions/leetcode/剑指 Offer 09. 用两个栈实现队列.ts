class CQueue {
  // inStack: number[];
  // outStack: number[];

  // constructor() {
  //   this.inStack = [];
  //   this.outStack = [];
  // }

  // appendTail(value: number): void {
  //   this.inStack.push(value);
  // }

  // deleteHead(): number {
  //   if (!this.outStack.length) {
  //     if (!this.inStack.length) {
  //       return -1;
  //     }
  //     while (this.inStack.length) {
  //       this.outStack.push(this.inStack.pop() as number);
  //     }
  //   }
  //   return this.outStack.pop() as number;
  // }

  private in: number[] = [];
  private out: number[] = [];

  constructor() {}

  appendTail(x: number): void {
    this.out2in();
    this.in.push(x);
  }

  deleteHead(): number {
    this.in2out();
    const res = this.out.pop() as number;
    return !res ? -1 : res;
  }

  out2in(): void {
    while (this.out.length) {
      this.in.push(this.out.pop() as number);
    }
  }

  in2out(): void {
    while (this.in.length) {
      this.out.push(this.in.pop() as number);
    }
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

export default void 0;
