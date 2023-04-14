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

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = (slow as ListNode).next;
    fast = fast.next.next;
    if (fast === slow) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  fast = head;
  while (fast !== slow) {
    slow = (slow as ListNode).next;
    fast = (fast as ListNode).next;
  }
  return slow;
}

export default void 0;
