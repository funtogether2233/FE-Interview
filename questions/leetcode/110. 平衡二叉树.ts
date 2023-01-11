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

function isBalanced(root: TreeNode | null): boolean {
  // 自顶向下的递归
  //   if (root === null) {
  //     return true;
  //   }
  //   return (
  //     Math.abs(height(root.left) - height(root.right)) <= 1 &&
  //     isBalanced(root.left) &&
  //     isBalanced(root.right)
  //   );

  //   function height(root: TreeNode | null): number {
  //     if (root === null) {
  //       return 0;
  //     }
  //     return Math.max(height(root.left), height(root.right)) + 1;
  //   }

  // 自底向上的递归
  return height(root) >= 0;

  function height(root: TreeNode | null): number {
    if (root == null) {
      return 0;
    }
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

export default void 0;
