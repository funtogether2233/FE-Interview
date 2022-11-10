/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针：
// var reverseList = function(head) {
//     if(!head || !head.next) return head;
//     let temp = null, pre = null, cur = head;
//     while(cur) {
//         temp = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = temp;
//     }
//     return pre;
// }

// 递归：
// var reverse = function(pre, head) {
//     if(!head) return pre;
//     const temp = head.next;
//     head.next = pre;
//     pre = head
//     return reverse(pre, temp);
// }

// var reverseList = function(head) {
//     return reverse(null, head);
// };

// 递归2
// var reverse = function (head) {
//   if (!head || !head.next) return head;
//   // 从后往前翻
//   const pre = reverse(head.next);
//   head.next = pre.next;
//   pre.next = head;
//   return head;
// };

// var reverseList = function (head) {
//   let cur = head;
//   while (cur && cur.next) {
//     cur = cur.next;
//   }
//   reverse(head);
//   return cur;
// };

// 第二次写
var reverseList = function (head) {
  let cur = head,
    pre = null,
    next = null;
  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
