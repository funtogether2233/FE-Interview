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

function pathSum(root: TreeNode | null, targetSum: number): number {
  // 前缀和
  const prefix: Map<number, number> = new Map();
  // 设总和为 0 的路径数 1
  prefix.set(0, 1);
  return dfs(root, 0);

  function dfs(node: TreeNode | null, cur: number): number {
    if (node === null) {
      return 0;
    }
    cur += node.val;
    // 现在前缀和中有 cur - targetSum 代表有节点到当前节点和为 targetSum
    let res = prefix.get(cur - targetSum) || 0;
    // 前缀和为 cur 的个数 + 1
    prefix.set(cur, (prefix.get(cur) || 0) + 1);
    res += dfs(node.left, cur);
    res += dfs(node.right, cur);
    // 回溯
    prefix.set(cur, (prefix.get(cur) || 0) - 1);
    return res;
  }
}

export default void 0;
