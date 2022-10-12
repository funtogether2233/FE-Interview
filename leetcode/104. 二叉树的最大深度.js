/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const findDeep = function (root) {
    if (!root) {
      return 0;
    }
    return Math.max(findDeep(root.left), findDeep(root.right)) + 1;
  };
  return findDeep(root);
};
