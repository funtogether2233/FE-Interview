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

function swapPairs(head: ListNode | null): ListNode | null {
  // 递归
  // if (!head || !head.next) {
  //   return head;
  // }
  // const next = head.next;
  // head.next = swapPairs(next.next);
  // next.next = head;
  // return next;

  // 迭代
  const dummyHead = new ListNode(0, head);
  let temp = dummyHead;
  while (temp.next && temp.next.next) {
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }
  return dummyHead.next;
}

export default void 0;
