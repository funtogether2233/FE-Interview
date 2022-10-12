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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // let res = [];
  // if(root !== null){
  //     zxbl(res,root);
  // }
  // return res;

  let res = [],
    stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

// var zxbl = function(arr,child){
//     if(child === null){
//         return;
//     }
//     zxbl(arr,child.left);
//     arr.push(child.val);
//     zxbl(arr,child.right);
//     return;
// }
