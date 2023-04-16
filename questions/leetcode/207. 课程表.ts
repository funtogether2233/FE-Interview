function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 入度与出度统计
  const inDegree: number[] = new Array(numCourses).fill(0),
    outDegreeMap: Map<number, number[]> = new Map();
  for (const item of prerequisites) {
    inDegree[item[0]]++;
    if (outDegreeMap.has(item[1])) {
      outDegreeMap.get(item[1])?.push(item[0]);
    } else {
      outDegreeMap.set(item[1], [item[0]]);
    }
  }
  // 入度为 0，无前置课
  const queue: number[] = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0;
  while (queue.length) {
    const course = queue.shift()!;
    count++;
    // 依赖本课的接下来的课程
    const nextCourse = outDegreeMap.get(course);
    if (nextCourse?.length) {
      for (const item of nextCourse) {
        inDegree[item]--;
        if (inDegree[item] === 0) {
          queue.push(item);
        }
      }
    }
  }
  return count === numCourses;
}

export default void 0;
