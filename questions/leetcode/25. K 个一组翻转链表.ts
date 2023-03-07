/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let dummy = new ListNode(-1, head),
    pre = dummy;
  while (true) {
    // 检查剩余节点是否有k个，不足则返回
    let last: ListNode | null = pre;
    for (let i = 0; i < k; i++) {
      last = last.next;
      if (last === null) {
        return dummy.next;
      }
    }
    // 翻转k个节点
    let cur = pre.next as ListNode,
      next: ListNode;
    for (let i = 0; i < k - 1; i++) {
      next = cur.next as ListNode;
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
    }
    pre = cur;
  }
}

export default void 0;
