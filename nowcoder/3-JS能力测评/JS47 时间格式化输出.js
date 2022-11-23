// 描述
// 按所给的时间格式输出指定的时间
// 格式说明
// 对于 2014.09.05 13:14:20
// yyyy: 年份，2014
// yy: 年份，14
// MM: 月份，补满两位，09
// M: 月份, 9
// dd: 日期，补满两位，05
// d: 日期, 5
// HH: 24制小时，补满两位，13
// H: 24制小时，13
// hh: 12制小时，补满两位，01
// h: 12制小时，1
// mm: 分钟，补满两位，14
// m: 分钟，14
// ss: 秒，补满两位，20
// s: 秒，20
// w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五
// 示例1
// 输入：
// formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
// 输出：
// 2014-09-05 13:14:20 星期五
function formatDate(d, format) {
  var year = d.getFullYear(),
    month = d.getMonth() + 1,
    date = d.getDate(),
    hour = d.getHours(),
    minute = d.getMinutes(),
    second = d.getSeconds(),
    day = d.getDay(),
    week = ["日", "一", "二", "三", "四", "五", "六"];
  return format
    .replace(/yyyy/, year)
    .replace(/yy/, pad(year % 100))
    .replace(/MM/, pad(month))
    .replace(/M/, month)
    .replace(/dd/, pad(date))
    .replace(/d/, date)
    .replace(/HH/, pad(hour))
    .replace(/H/, hour)
    .replace(/hh/, pad(hour % 12))
    .replace(/h/, hour % 12)
    .replace(/mm/, pad(minute))
    .replace(/m/, minute)
    .replace(/ss/, pad(second))
    .replace(/s/, second)
    .replace(/w/, week[day]);
}

function pad(n) {
  return n < 10 ? "0" + +n : n;
}
