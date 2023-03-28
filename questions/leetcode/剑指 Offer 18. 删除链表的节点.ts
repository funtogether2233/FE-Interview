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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let preNode = dummyHead,
    curNode = head;
  while (curNode !== null && curNode.val !== val) {
    preNode = curNode;
    curNode = curNode.next;
  }
  preNode.next = (curNode as ListNode).next;
  (curNode as ListNode).next = null;
  return dummyHead.next;
}

export default void 0;
