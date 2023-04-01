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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const inorderMap: Map<number, number> = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }
  return recur(0, 0, preorder.length - 1);

  function recur(rootIOfPre: number, leftOfIn: number, rightOfIn: number) {
    if (leftOfIn > rightOfIn) {
      return null;
    }
    const rootIOfIn = inorderMap.get(preorder[rootIOfPre])!;
    return new TreeNode(
      preorder[rootIOfPre],
      recur(rootIOfPre + 1, leftOfIn, rootIOfIn - 1),
      recur(rootIOfIn - leftOfIn + rootIOfPre + 1, rootIOfIn + 1, rightOfIn)
    );
  }
}

export default void 0;
