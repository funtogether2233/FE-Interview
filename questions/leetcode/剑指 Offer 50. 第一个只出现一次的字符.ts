function firstUniqChar(s: string): string {
  const charFrequencyMap: Map<string, number> = new Map();
  for (const char of Array.from(s)) {
    if (!charFrequencyMap.has(char)) {
      charFrequencyMap.set(char, 1);
    } else {
      charFrequencyMap.set(char, charFrequencyMap.get(char)! + 1);
    }
  }
  for (const [key, value] of charFrequencyMap) {
    if (value === 1) {
      return key;
    }
  }
  return " ";
}

export default void 0;
