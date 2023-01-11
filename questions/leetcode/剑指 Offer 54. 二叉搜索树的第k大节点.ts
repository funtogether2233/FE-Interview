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

function kthLargest(root: TreeNode | null, k: number): number {
  let stack: TreeNode[] = [],
    node: TreeNode | null = root;
  while (node !== null || stack.length !== 0) {
    while (node) {
      stack.push(node);
      node = node.right as TreeNode;
    }
    if (stack.length !== 0) {
      node = stack.pop() as TreeNode;
      --k;
      if (k === 0) {
        break;
      }
    }
    node = (node as TreeNode).left as TreeNode;
  }
  return (node as TreeNode).val as number;
}

export default void 0;
