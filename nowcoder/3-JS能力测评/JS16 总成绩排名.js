// 描述
// 请补全JavaScript代码，要求将数组参数中的对象以总成绩(包括属性"chinese"、"math"、"english")从高到低进行排序并返回。
const _rank = (array) => {
  return array.sort((a, b) => {
    return b.chinese + b.math + b.english - (a.chinese + a.math + a.english);
  });
};
