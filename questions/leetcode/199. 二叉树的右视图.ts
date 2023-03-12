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

function rightSideView(root: TreeNode | null): number[] {
  // dfs
  // const res: number[] = [];
  // dfs(res, root, 0);
  // return res;

  // function dfs(res: number[], node: TreeNode | null, level: number) {
  //   if (node === null) {
  //     return;
  //   }
  //   if (res.length === level) {
  //     res.push(node.val);
  //   }
  //   dfs(res, node.right, level + 1);
  //   dfs(res, node.left, level + 1);
  // }

  // bfs
  if (root == null) {
    return [];
  }
  const queue: TreeNode[] = [];
  const res: number[] = [];
  queue.push(root);
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift() as TreeNode;
      if (i === size - 1) {
        res.push(node.val);
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
  return res;
}

export default void 0;
