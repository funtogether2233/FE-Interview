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

function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: string[] = [];
  construct_paths(root, "");
  return paths;

  function construct_paths(root: TreeNode | null, path: string): void {
    if (root) {
      path += root.val.toString();
      if (root.left === null && root.right === null) {
        // 当前节点是叶子节点
        paths.push(path); // 把路径加入到答案中
      } else {
        path += "->"; // 当前节点不是叶子节点，继续递归遍历
        construct_paths(root.left, path);
        construct_paths(root.right, path);
      }
    }
  }
}

export default void 0;
