// 描述
// 请补全JavaScript代码，该函数接受两个参数分别为数组、索引值，要求在不改变原数组的情况下返回删除了索引项的新数组。
const _delete = (array, index) => {
  array.splice(index, 1);
  return array;
};
