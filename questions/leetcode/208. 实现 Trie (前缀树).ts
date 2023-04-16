class Trie {
  // wordSet: Set<string> = new Set();
  // prefixSet: Set<string> = new Set();

  // constructor() {}

  // insert(word: string): void {
  //   if (this.wordSet.has(word)) {
  //     return;
  //   }
  //   this.wordSet.add(word);
  //   for (let i = word.length; i > 0; i--) {
  //     let prefix = word.slice(0, i);
  //     if (this.prefixSet.has(prefix)) {
  //       break;
  //     }
  //     this.prefixSet.add(prefix);
  //   }
  // }

  // search(word: string): boolean {
  //   return this.wordSet.has(word);
  // }

  // startsWith(prefix: string): boolean {
  //   return this.prefixSet.has(prefix);
  // }

  children = { isEnd: false };

  constructor() {}

  insert(word: string): void {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = { isEnd: false };
      }
      node = node[ch];
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) {
        return false;
      }
      node = node[ch];
    }
    return node !== undefined && node.isEnd !== false;
  }

  startsWith(prefix: string): boolean {
    let node = this.children;
    for (const ch of prefix) {
      if (!node[ch]) {
        return false;
      }
      node = node[ch];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default void 0;
