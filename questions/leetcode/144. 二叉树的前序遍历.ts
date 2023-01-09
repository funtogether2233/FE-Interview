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

function preorderTraversal(root: TreeNode | null): number[] {
  // 递归
  //   let res: number[] = [];
  //   preorder(root, res);
  //   return res;

  //   function preorder(root: TreeNode | null, res: number[]): void {
  //     if (root === null) {
  //       return;
  //     }
  //     res.push(root.val);
  //     preorder(root.left, res);
  //     preorder(root.right, res);
  //   }

  // 迭代
  let res: number[] = [],
    preorderStack: TreeNode[] = [],
    node = root;
  while (preorderStack.length !== 0 || node !== null) {
    while (node !== null) {
      res.push(node.val);
      preorderStack.push(node);
      node = node.left;
    }
    node = preorderStack.pop() as TreeNode;
    node = node.right;
  }
  return res;
}
