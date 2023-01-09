// 描述
// 请补全JavaScript代码，要求以字符串的形式返回文件名扩展名，文件名参数为"filename"。
const _getExFilename = (filename) => {
  return filename.slice(filename.lastIndexOf("."));
};
