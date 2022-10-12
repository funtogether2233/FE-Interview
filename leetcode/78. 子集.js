/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // let res = [];
  // res.push([]);
  // for(let i = 0; i < nums.length; ++i){
  //     let rl = res.length;
  //     for(let j = 0; j < rl; ++j){
  //         let tmp = [...res[j]];
  //         tmp.push(nums[i]);
  //         res.push(tmp);
  //     }
  // }
  // return res;

  let res = [];
  let path = [];
  const dfs = (cur) => {
    if (cur === nums.length) {
      res.push(path.slice());
      return;
    }
    path.push(nums[cur]);
    dfs(cur + 1);
    path.pop();
    dfs(cur + 1);
  };
  dfs(0);
  return res;
};
