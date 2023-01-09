// 描述
// 请补全JavaScript代码，完成名为"Rectangle"的矩形类。要求如下：
// 1. 构造函数只包含两个参数，依次为"height"、"width"
// 2. 设置Getter，当获取该对象的"area"属性时，返回该对象"height"与"width"属性的乘积
// 示例1
// 输入：
// new Rectangle(12,12).area
// 输出：
// 144
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.height * this.width;
  }
}
