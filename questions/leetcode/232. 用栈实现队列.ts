class MyQueue {
  private in: number[] = [];
  private out: number[] = [];

  constructor() {}

  push(x: number): void {
    this.out2in();
    this.in.push(x);
  }

  pop(): number {
    this.in2out();
    return this.out.pop() as number;
  }

  peek(): number {
    this.in2out();
    return this.out[this.out.length - 1];
  }

  empty(): boolean {
    return !this.in.length && !this.out.length;
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
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

export default void 0;
