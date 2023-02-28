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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let res = head,
    fast = head;
  while (k--) {
    fast = (fast as ListNode).next;
  }
  while (fast) {
    fast = fast.next;
    res = (res as ListNode).next;
  }
  return res;
}

export default void 0;
