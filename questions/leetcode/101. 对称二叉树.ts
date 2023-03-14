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
  if (root === null) {
    return true;
  }
  return compareNode(root.left, root.right);

  function compareNode(left: TreeNode | null, right: TreeNode | null) {
    if (
      (left === null && right !== null) ||
      (left !== null && right === null)
    ) {
      // if (+(left === null) ^ +(right === null)) { // 效率低
      return false;
    }
    if (left === null && right === null) {
      return true;
    }
    if ((left as TreeNode).val !== (right as TreeNode).val) {
      return false;
    }
    let outSide = compareNode(
      (left as TreeNode).left,
      (right as TreeNode).right
    );
    let inSide = compareNode(
      (left as TreeNode).right,
      (right as TreeNode).left
    );
    return outSide && inSide;
  }
}

export default void 0;
