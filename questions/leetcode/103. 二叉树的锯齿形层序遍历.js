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
var zigzagLevelOrder = function (root) {
  let res = [];
  if (!root) {
    return [];
  }
  let pre = [root],
    flag = true;
  while (pre.length !== 0) {
    let level = [],
      n = pre.length;
    for (let i = 0; i < n; ++i) {
      if (flag) {
        let node = pre.shift();
        level.push(node.val);
        if (node.left) {
          pre.push(node.left);
        }
        if (node.right) {
          pre.push(node.right);
        }
      } else {
        let node = pre.pop();
        level.push(node.val);
        if (node.right) {
          pre.unshift(node.right);
        }
        if (node.left) {
          pre.unshift(node.left);
        }
      }
    }
    flag = !flag;
    res.push(level);
  }
  return res;
};
