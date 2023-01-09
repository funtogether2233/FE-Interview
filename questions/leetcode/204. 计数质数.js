/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // 枚举
  // const isPrime = (x) => {
  //     for (let i = 2; i * i <= x; ++i) {
  //         if (x % i == 0) {
  //             return false;
  //         }
  //     }
  //     return true;
  // }
  // let res = 0;
  // for (let i = 2; i < n; ++i) {
  //     if(isPrime(i)){
  //         res++;
  //     }
  // }
  // return res;

  // 埃氏筛
  // const isPrime = new Array(n).fill(1);
  // let res = 0;
  // for (let i = 2; i < n; ++i) {
  //     if (isPrime[i]) {
  //         res++;
  //         for (let j = i * i; j < n; j += i) {
  //             isPrime[j] = 0;
  //         }
  //     }
  // }
  // return res;

  // 线性筛
  const isPrime = new Array(n).fill(1);
  const primes = [];
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      primes.push(i);
    }
    for (let j = 0; j < primes.length && i * primes[j] < n; ++j) {
      isPrime[i * primes[j]] = 0;
      if (i % primes[j] === 0) {
        break;
      }
    }
  }
  return primes.length;
};
