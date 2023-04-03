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
  if (root === null) {
    return [];
  }
  const queue: TreeNode[] = [root],
    res: number[][] = [];
  for (let bool = true; queue.length > 0; bool = !bool) {
    const level: number[] = [],
      length = queue.length - 1;
    for (let i = length; i >= 0; i--) {
      const node = queue.shift() as TreeNode;
      level[bool ? length - i : i] = node.val;
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    res.push(level);
  }
  return res;
}

export default void 0;
