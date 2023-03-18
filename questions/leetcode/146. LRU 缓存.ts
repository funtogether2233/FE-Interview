class LinkedNode {
  key: number;
  val: number;
  pre: LinkedNode | null = null;
  next: LinkedNode | null = null;
  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
  }
}

class LRUCache {
  private queue = new Map();
  private head = new LinkedNode(0, 0);
  private tail = new LinkedNode(0, 0);
  len: number;

  constructor(capacity: number) {
    this.len = capacity;
    // 双向链表
    this.head.next = this.tail;
    this.head.pre = this.tail;
    this.tail.pre = this.head;
    this.tail.next = this.head;
  }

  get(key: number): number {
    let node = this.queue.get(key);
    if (!node) {
      return -1;
    } else {
      // 存在则添加至头节点
      this.addToHead(key, node);
      return node.val;
    }
  }

  put(key: number, value: number): void {
    // 存在则获取 node 并覆盖 val
    if (this.queue.has(key)) {
      let node = this.queue.get(key);
      node.val = value;
      this.addToHead(key, node);
    } else {
      // 序列满则删除尾节点
      if (this.len <= 0) {
        this.queue.delete(this.delTail().key);
        this.len++;
      }
      // 添加新 node
      let node = new LinkedNode(key, value);
      this.addToHead(key, node);
      this.queue.set(key, node);
      this.len--;
    }
  }

  addToHead(key: number, node: LinkedNode) {
    // 存在则删除 node
    if (this.queue.has(key)) {
      let preNode = node.pre as LinkedNode;
      let nextNode = node.next as LinkedNode;
      preNode.next = nextNode;
      nextNode.pre = preNode;
    }
    // 将 node 添加至表头
    let head = this.head.next as LinkedNode;
    node.next = head;
    node.pre = head.pre;
    head.pre = node;
    this.head.next = node;
  }

  delTail() {
    // 删除尾节点
    let tail = this.tail.pre as LinkedNode;
    let preNode = tail.pre as LinkedNode;
    let nextNode = tail.next as LinkedNode;
    preNode.next = nextNode;
    nextNode.pre = preNode;
    return tail;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default void 0;
