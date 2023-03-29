/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;

  // if (!headA || !headB) {
  //   return null;
  // }
  // let lenA = 1,
  //   lenB = 1,
  //   pA = headA,
  //   pB = headB;
  // while (pA.next) {
  //   pA = pA.next;
  //   ++lenA;
  // }
  // while (pB.next) {
  //   pB = pB.next;
  //   ++lenB;
  // }
  // if (pA !== pB) {
  //   return null;
  // }
  // let gap = lenA - lenB;
  // if (gap >= 0) {
  //   while (gap--) {
  //     headA = headA.next;
  //   }
  // } else if (gap < 0) {
  //   while (gap++) {
  //     headB = headB.next;
  //   }
  // }
  // while (headA !== headB) {
  //   headA = headA.next;
  //   headB = headB.next;
  // }
  // return headA;
};
