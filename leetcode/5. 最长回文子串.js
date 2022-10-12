/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // let dp =[s.length],
  //     maxlength = 0, left = 0, right = 0;
  // for(let i=0; i<s.length; i++){
  //     dp[i] = [s.length];
  // }
  // for(let i = s.length - 1; i >= 0; i--){
  //     for(let j = i; j < s.length; j++){
  //         if(s[i] === s[j] && (j - i <= 1 || dp[i + 1][j-1])){
  //             dp[i][j] = true;
  //             if(j - i + 1 > maxlength){
  //                 maxlength = j - i + 1;
  //                 left = i;
  //                 right =j;
  //             }
  //         }
  //     }
  // }
  // return s.slice(left, right+1);

  let maxlength = 0,
    left = 0,
    right = 0;
  const extend = (s, i, j) => {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      if (j - i + 1 > maxlength) {
        maxlength = j - i + 1;
        left = i;
        right = j;
      }
      i--;
      j++;
    }
  };
  for (let i = 0; i < s.length; i++) {
    extend(s, i, i);
    extend(s, i, i + 1);
  }
  return s.slice(left, right + 1);
};
