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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) {
    return [];
  }
  let pre = [root],
    flag = true;
  while (pre.length !== 0) {
    const level: number[] = [],
      n = pre.length;
    for (let i = 0; i < n; ++i) {
      if (flag) {
        const node = pre.shift() as TreeNode;
        level.push(node.val);
        if (node.left) {
          pre.push(node.left);
        }
        if (node.right) {
          pre.push(node.right);
        }
      } else {
        let node = pre.pop() as TreeNode;
        level.push(node.val);
        if (node.right) {
          pre.unshift(node.right);
        }
        if (node.left) {
          pre.unshift(node.left);
        }
      }
    }
    flag = !flag;
    res.push(level);
  }
  return res;
}

export default void 0;
