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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let res = new ListNode(0, head),
    slow = res,
    fast = res;
  while (n--) {
    fast = fast.next as ListNode;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next as ListNode;
  }
  slow.next = (slow.next as ListNode).next;
  return res.next;
}

export default void 0;
