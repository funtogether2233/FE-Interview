function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split("."),
    v2 = version2.split(".");
  for (let i = 0; i < v1.length || i < v2.length; ++i) {
    const a = i < v1.length ? parseInt(v1[i]) : 0,
      b = i < v2.length ? parseInt(v2[i]) : 0;
    if (a !== b) {
      return a > b ? 1 : -1;
    }
  }
  return 0;
}

export default void 0;
