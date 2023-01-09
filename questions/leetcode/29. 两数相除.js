/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // let flag = false;
  // if(dividend < 0){ dividend = -dividend; flag = !flag;}
  // if(divisor < 0){ divisor = -divisor; flag = !flag;}
  // if(divisor === 1){
  //     if(dividend === 2147483648){
  //         if(flag){ return -2147483648;
  //         }else{ return 2147483647;}
  //     }
  //     if(flag){ return -dividend;
  //     }else{ return dividend;}
  // }
  // if(dividend === 2147483648){
  //     dividend -= 1;
  //     let res = 0;
  //     for(let i = 30; i>=0; i--){
  //         if(dividend>>i >= divisor){
  //             res += 1<<i;
  //             dividend -= divisor<<i;
  //         }
  //     }
  //     if(divisor === 2){
  //         if(flag){ return -res-1;
  //         }else{ return res+1;}
  //     }
  //     if(flag){ return -res;
  //     }else{ return res;}
  // }
  // let res = 0;
  // for(let i = 30; i>=0; i--){
  //     if(dividend>>i >= divisor){
  //         res += 1<<i;
  //         dividend -= divisor<<i;
  //     }
  // }
  // if(flag){ return -res;
  // }else{ return res;}

  const MAX_VALUE = 2 ** 31 - 1,
    MIN_VALUE = -(2 ** 31);
  // 考虑被除数为最小值的情况
  if (dividend === MIN_VALUE) {
    if (divisor === 1) {
      return MIN_VALUE;
    }
    if (divisor === -1) {
      return MAX_VALUE;
    }
  }
  // 考虑除数为最小值的情况
  if (divisor === MIN_VALUE) {
    return dividend === MIN_VALUE ? 1 : 0;
  }
  // 考虑被除数为 0 的情况
  if (dividend === 0) {
    return 0;
  }

  // 一般情况，使用类二分查找
  // 将所有的正数取相反数，这样就只需要考虑一种情况
  let rev = false;
  if (dividend > 0) {
    dividend = -dividend;
    rev = !rev;
  }
  if (divisor > 0) {
    divisor = -divisor;
    rev = !rev;
  }

  const candidates = [divisor];
  let index = 0;
  // 注意溢出
  while (candidates[index] >= dividend - candidates[index]) {
    candidates.push(candidates[index] + candidates[index]);
    ++index;
  }
  let ans = 0;
  for (let i = candidates.length - 1; i >= 0; --i) {
    if (candidates[i] >= dividend) {
      ans += 1 << i;
      dividend -= candidates[i];
    }
  }

  return rev ? -ans : ans;
};
