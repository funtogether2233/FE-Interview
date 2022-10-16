/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  for (let i = 0; i < v1.length || i < v2.length; ++i) {
    const x = i < v1.length ? parseInt(v1[i]) : 0,
      y = i < v2.length ? parseInt(v2[i]) : 0;
    if (x !== y) {
      return x > y ? 1 : -1;
    }
  }
  return 0;
};
