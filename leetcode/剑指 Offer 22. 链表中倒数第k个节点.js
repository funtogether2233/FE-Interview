/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let res = head,
    fast = head;
  while (k--) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    res = res.next;
  }
  return res;
};
