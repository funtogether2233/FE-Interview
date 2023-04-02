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

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A || !B) {
    return false;
  }
  return (
    isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );

  function isSame(a: TreeNode | null, b: TreeNode | null): boolean {
    if (!b) {
      return true;
    }
    if (!a) {
      return false;
    }
    return (
      a.val === b.val && isSame(a.left, b.left) && isSame(a.right, b.right)
    );
  }
}

export default void 0;
