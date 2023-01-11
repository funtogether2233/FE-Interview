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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let res = new ListNode(),
    p = res;
  while (true) {
    if (list1 === null) {
      p.next = list2;
      break;
    }
    if (list2 === null) {
      p.next = list1;
      break;
    }
    if (list1.val <= list2.val) {
      p.next = list1;
      p = p.next;
      list1 = list1.next;
      continue;
    }
    p.next = list2;
    p = p.next;
    list2 = list2.next;
  }
  return res.next;
}

export default void 0;
