// 描述
// 为 Array 对象添加一个去除重复项的方法
// 示例1
// 输入：
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
// 输出：
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
Array.prototype.uniq = function () {
  let hasNaN = false;
  for (let i = 0; i < this.length; i++) {
    if (!hasNaN && this[i] !== this[i]) {
      hasNaN = true;
    }
    for (let j = i + 1; j < this.length; ) {
      if (this[i] === this[j] || (hasNaN && this[j] !== this[j])) {
        this.splice(j, 1);
      } else {
        j++;
      }
    }
  }
  return this;
};
