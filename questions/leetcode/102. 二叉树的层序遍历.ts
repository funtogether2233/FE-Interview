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

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [],
    pre: (TreeNode | null)[] = [];
  if (!root) {
    return res;
  }
  pre.push(root);
  while (pre.length !== 0) {
    let n = pre.length,
      level: number[] = [];
    for (let i = 0; i < n; ++i) {
      let node = pre.shift() as TreeNode;
      level.push(node.val);
      if (node.left) {
        pre.push(node.left);
      }
      if (node.right) {
        pre.push(node.right);
      }
    }
    res.push(level);
  }
  return res;
}

export default void 0;
