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

function pathSum(root: TreeNode | null, target: number): number[][] {
  if (!root) {
    return [];
  }
  const res: number[][] = [],
    cur: number[] = [];
  dfs(root, res, cur, target);
  return res;

  function dfs(node: TreeNode, res: number[][], cur: number[], target: number) {
    if (!node) {
      return;
    }
    if (target === node.val && !node.left && !node.right) {
      res.push([...cur, node.val]);
      return;
    }
    if (node.left) {
      cur.push(node.val);
      dfs(node.left, res, cur, target - node.val);
      cur.pop();
    }
    if (node.right) {
      cur.push(node.val);
      dfs(node.right, res, cur, target - node.val);
      cur.pop();
    }
  }
}

export default void 0;
