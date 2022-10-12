/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // for(let i=0;i<20;i++){
  //     let tmp=3**i;
  //     if(n===tmp){
  //         return true;
  //     }
  // }
  // return false;
  return n > 0 && 1162261467 % n === 0;
};
