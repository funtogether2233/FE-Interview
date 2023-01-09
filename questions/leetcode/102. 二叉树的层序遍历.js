/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  //   let res = [];
  //   if (!root) {
  //     return [];
  //   }
  //   let pre = [root];
  //   while (pre.length !== 0) {
  //     let level = [],
  //       n = pre.length;
  //     for (let i = 0; i < n; ++i) {
  //       let node = pre.shift();
  //       level.push(node.val);
  //       if (node.left) {
  //         pre.push(node.left);
  //       }
  //       if (node.right) {
  //         pre.push(node.right);
  //       }
  //     }
  //     res.push(level);
  //   }
  //     return res;

  // 第二次写
  let res = [];
  if (!root) {
    return res;
  }
  let pre = [root];
  while (pre.length !== 0) {
    let n = pre.length,
      level = [];
    for (let i = 0; i < n; ++i) {
      let node = pre.shift();
      level.push(node.val);
      if (node.left) {
        pre.push(node.left);
      }
      if (node.right) {
        pre.push(node.right);
      }
    }
    res.push(level);
  }
  return res;
};
