function validIPAddress(queryIP: string): string {
  // 正则
  // return queryIP.match(/^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)($|(?!\.$)\.)){4}$/)
  //   ? "IPv4"
  //   : queryIP.match(/^(([\da-fA-F]{1,4})($|(?!:$):)){8}$/)
  //   ? "IPv6"
  //   : "Neither";

  const possibleIPV4 = queryIP.split(".");
  if (possibleIPV4.length === 4 && isIPV4(possibleIPV4)) {
    return "IPv4";
  }

  const possibleIPV6 = queryIP.split(":");
  if (possibleIPV6.length === 8 && isIPV6(possibleIPV6)) {
    return "IPv6";
  }

  return "Neither";

  function isIPV4(ips: string[]): boolean {
    for (let i = 0; i < 4; i++) {
      if (ips[i].length === 0 || ips[i].length > 3) {
        return false;
      }
      if (ips[i].length > 1 && ips[i][0] === "0") {
        return false;
      }
      for (const char of ips[i]) {
        if (char < "0" || char > "9") {
          return false;
        }
      }
      const number = +ips[i];
      if (Number.isNaN(number) || number > 255 || number < 0) {
        return false;
      }
    }
    return true;
  }

  function isIPV6(ips: string[]): boolean {
    for (let i = 0; i < 8; i++) {
      if (ips[i].length === 0 || ips[i].length > 4) {
        return false;
      }
      for (const char of ips[i]) {
        if (
          (char < "0" || char > "9") &&
          (char.toLowerCase() < "a" || char.toLowerCase() > "f")
        ) {
          return false;
        }
      }
    }
    return true;
  }
}

export default void 0;
