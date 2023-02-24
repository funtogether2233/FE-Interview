// 描述
// 请补全JavaScript代码，要求以Boolean的形式返回字符串参数是否为合法的URL格式。
// 注意：
// 1. 协议仅为HTTP(S)

const _isUrl = (url) => {
  // 补全代码
  //   return url.split(":")[0] == "https";
  //   return /^https?:\/\/[a-z0-9A-Z_$][\w-]*(\.[\w-]+)+(\:\d+)?(\/\w+)*(\?\w+=.*(\&\w+=.*)*)?/g.test(
  //     url
  //   );
  //   return url.includes("https");
  return url.startsWith("https");
};
