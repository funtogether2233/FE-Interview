/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  const map = new Map();
  let curNode = head;
  while (curNode) {
    map.set(curNode, new Node(curNode.val));
    curNode = curNode.next;
  }
  curNode = head;
  while (curNode) {
    map.get(curNode).next = map.get(curNode.next) ?? null;
    map.get(curNode).random = map.get(curNode.random) ?? null;
    curNode = curNode.next;
  }
  return map.get(head);
};
