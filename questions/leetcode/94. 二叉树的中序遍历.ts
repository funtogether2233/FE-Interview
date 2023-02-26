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

function inorderTraversal(root: TreeNode | null): number[] {
  //   let res: number[] = [],
  //     stack: (TreeNode | null)[] = [];
  //   while (root || stack.length) {
  //     while (root) {
  //       stack.push(root);
  //       root = root.left;
  //     }
  //     root = stack.pop() as TreeNode;
  //     res.push(root.val);
  //     root = root.right;
  //   }
  //   return res;

  const res: number[] = [];
  dfs(root);
  return res;

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  }
}

export default void 0;
