class MaxQueue {
  queue: number[] = [];
  max_queue: number[] = [];

  constructor() {}

  max_value(): number {
    if (!this.queue.length) {
      return -1;
    }
    return this.max_queue[0];
  }

  push_back(value: number): void {
    this.queue.push(value);
    while (
      this.max_queue.length &&
      this.max_queue[this.max_queue.length - 1] < value
    ) {
      this.max_queue.pop();
    }
    this.max_queue.push(value);
  }

  pop_front(): number {
    if (!this.queue.length) {
      return -1;
    }
    const front = this.queue.shift() as number;
    if (front === this.max_queue[0]) {
      this.max_queue.shift();
    }
    return front;
  }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

export default void 0;
