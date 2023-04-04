/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root == null) {
    return null;
  }
  let head=null, preNode=null;
  dfs(root);
  head.left = preNode;
  preNode.right = head;
  return head;

  function dfs(curNode) {
    if (curNode === null) {
      return;
    }
    dfs(curNode.left);
    if (preNode !== null) {
      preNode.right = curNode;
    } else {
      head = curNode;
    }
    curNode.left = preNode;
    preNode = curNode;
    dfs(curNode.right);
  }
};
