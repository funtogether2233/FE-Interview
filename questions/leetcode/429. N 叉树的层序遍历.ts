/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function levelOrder(root: Node | null): number[][] {
  if (root === null) {
    return [];
  }
  const res: number[][] = [],
    queue = [root];
  while (queue.length) {
    const length = queue.length,
      level: number[] = [];
    for (let i = 0; i < length; ++i) {
      const cur = queue.shift() as Node;
      level.push(cur.val);
      for (const child of cur.children) {
        queue.push(child);
      }
    }
    res.push(level);
  }
  return res;
}

export default void 0;
