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
var diameterOfBinaryTree = function (root) {
  let res = 0;
  const dfs = (root) => {
    if (root == null) {
      return 0;
    }
    let L = dfs(root.left);
    let R = dfs(root.right);
    res = Math.max(res, L + R);
    return Math.max(L, R) + 1;
  };
  dfs(root);
  return res;
};
