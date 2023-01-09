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
var getListLen = function (head) {
  let len = 0,
    cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
};

var getIntersectionNode = function (headA, headB) {
  let longNode = headA,
    shortNode = headB,
    lenA = getListLen(longNode),
    lenB = getListLen(shortNode);
  if (lenA < lenB) {
    [longNode, shortNode] = [shortNode, longNode];
    [lenA, lenB] = [lenB, lenA];
  }
  let l = lenA - lenB;
  while (l--) {
    longNode = longNode.next;
  }
  while (longNode && longNode !== shortNode) {
    longNode = longNode.next;
    shortNode = shortNode.next;
  }
  return longNode;
};
