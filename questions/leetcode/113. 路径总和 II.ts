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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  //分解问题
  // if (root === null) {
  //   return [];
  // }
  // // 满足的分支会被提上来
  // if (!root.left && !root.right && targetSum === root.val) {
  //   return [[root.val]];
  // }
  // const leftPaths = pathSum(root.left, targetSum - root.val);
  // const rightPaths = pathSum(root.right, targetSum - root.val);
  // let res: number[][] = [];
  // // 增加当前节点并存入 res 以返回至上一节点
  // for (const path of leftPaths) {
  //   path.unshift(root.val);
  //   res.push(path);
  // }
  // for (const path of rightPaths) {
  //   path.unshift(root.val);
  //   res.push(path);
  // }
  // return res;

  //遍历
  const paths: number[][] = [];
  dfs(root, [], 0);
  return paths;

  function dfs(root: TreeNode | null, path: number[], sum: number) {
    if (root === null) {
      return;
    }
    path.push(root.val);
    sum += root.val;
    if (!root.left && !root.right && sum === targetSum) {
      paths.push([...path]);
    }
    dfs(root.left, path, sum);
    dfs(root.right, path, sum);
    path.pop();
    sum -= root.val;
  }
}

export default void 0;
