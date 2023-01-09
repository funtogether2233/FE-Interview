/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let a = [],
    n = gas.length,
    sum = 0;
  for (let i = 0; i < n; ++i) {
    a.push(gas[i] - cost[i]);
    sum += a[i];
  }
  if (sum < 0) {
    return -1;
  }
  let start = 0,
    rest = 0;
  for (let i = 0; i < n; ++i) {
    rest += a[i];
    if (rest < 0) {
      rest = 0;
      start = i + 1;
    }
  }
  return start;

  // let n = gas.length;
  // const circuit = (i) => {
  //     let gasSum = 0, j = i;
  //     do{
  //         gasSum += gas[j] - cost[j];
  //         if(gasSum < 0){return false;}
  //         if(++j >= n){j = 0;}
  //     }while(j != i);
  //     return true;
  // }
  // for(let i = 0; i < n; ++i){
  //     if(circuit(i)){return i;}
  // }
  // return -1;
};
