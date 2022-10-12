/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let ans = new ListNode();
  let p = ans;
  while (true) {
    if (list1 === null) {
      p.next = list2;
      break;
    } else if (list2 === null) {
      p.next = list1;
      break;
    } else if (list1.val < list2.val) {
      p.next = list1;
      p = p.next;
      list1 = list1.next;
    } else {
      p.next = list2;
      p = p.next;
      list2 = list2.next;
    }
  }
  return ans.next;
};
