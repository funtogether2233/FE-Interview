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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || p === null || q === null) {
    return null;
  }
  let res: TreeNode | null = root;
  while (res !== null) {
    if (p.val < res.val && q.val < res.val) {
      res = res.left;
    } else if (p.val > res.val && q.val > res.val) {
      res = res.right;
    } else {
      break;
    }
  }
  return res;

  // if (root === null || p === null || q === null) {
  //   return null;
  // }
  // if (
  //   p === root &&
  //   (q.val < root.val ? findPath(root.left, q) : findPath(root.right, q))
  // ) {
  //   return root;
  // }
  // if (
  //   q === root &&
  //   (p.val < root.val ? findPath(root.left, p) : findPath(root.right, p))
  // ) {
  //   return root;
  // }
  // if (p.val > root.val && q.val > root.val) {
  //   return lowestCommonAncestor(root.right, p, q);
  // } else if (p.val < root.val && q.val < root.val) {
  //   return lowestCommonAncestor(root.left, p, q);
  // } else {
  //   return findPath(root, p) && findPath(root, q) ? root : null;
  // }

  // function findPath(tree: TreeNode | null, target: TreeNode): boolean {
  //   if (tree === null) {
  //     return false;
  //   }
  //   if (target === tree) {
  //     return true;
  //   }
  //   return findPath(tree.left, target) || findPath(tree.right, target);
  // }
}

export default void 0;
