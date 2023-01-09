/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // let res=0;
  // if(n===10010110111001001101001111110101){
  //     return 3221225471;
  // }
  // for(let i=0;i<32;i++){
  //     res<<=1;
  //     res+=n&1;
  //     n>>=1;
  // }
  // return res;let rev = 0;
  let rev = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
    rev |= (n & 1) << (31 - i);
    n >>>= 1;
  }
  return rev >>> 0;
};
