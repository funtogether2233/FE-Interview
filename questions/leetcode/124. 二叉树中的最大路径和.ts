/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxPathSum(root: TreeNode | null): number {
  let res = Number.MIN_SAFE_INTEGER;
  getAns(root);
  return res;

  // 经过  node  节点的最大路径和
  function getAns (node: typeof root): number {
    if (!node) {
      return 0;
    }
    const left = getAns(node.left);
    const right = getAns(node.right);
    // 最大路径和
    res = Math.max(
      res,
      // 单个节点
      node.val,
      // 过根节点一半
      Math.max(left, right) + node.val,
      // 全长
      left + right + node.val
    );
    return Math.max(left, right, 0) + node.val;
  };
}

export default void 0;
