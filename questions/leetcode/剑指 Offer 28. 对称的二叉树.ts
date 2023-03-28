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

function isSymmetric(root: TreeNode | null): boolean {
  // if (!root) {
  //   return true;
  // }
  // return compare(root.left, root.right);

  // function compare(
  //   node1: TreeNode | null,
  //   node2: TreeNode | null
  // ): boolean {
  //   if (!node1 && !node2) {
  //     return true;
  //   }
  //   if (!node1 || !node2 || node1.val !== node2.val) {
  //     return false;
  //   }
  //   return (
  //     compare(node1.left, node2.right) &&
  //     compare(node1.right, node2.left)
  //   );
  // }

  if (!root) {
    return true;
  }
  let node1 = root.left,
    node2 = root.right;
  const queue = [node1, node2];
  while (queue.length) {
    node1 = queue.shift()!;
    node2 = queue.shift()!;
    if (!node1 && !node2) {
      continue;
    }
    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }
  return true;
}

export default void 0;
