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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let p1 = headA,
    p2 = headB;
  while (p1 !== p2) {
    if (p1 !== null) {
      p1 = p1.next;
    } else {
      p1 = headB;
    }
    if (p2 !== null) {
      p2 = p2.next;
    } else {
      p2 = headA;
    }
  }
  return p1;
}

export default void 0;
