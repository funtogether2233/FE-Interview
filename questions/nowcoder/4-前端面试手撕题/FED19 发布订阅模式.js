// 描述
// 请补全JavaScript代码，完成"EventEmitter"类实现发布订阅模式。
// 注意：
// 1. 同一名称事件可能有多个不同的执行函数
// 2. 通过"on"函数添加事件
// 3. 通过"emit"函数触发事件
class EventEmitter {
  constructor() {
    //记录当前被订阅的事件
    this.event = {};
  }
  //订阅事件
  on(e, fn) {
    //是新事件
    if (!this.event[e]) {
      this.event[e] = [fn];
    } else {
      //旧事件添加新方法
      this.event[e].push(fn);
    }
  }
  //触发事件
  emit(e) {
    if (this.event[e]) {
      this.event[e].forEach((fun) => fun());
    }
  }
}
