// Author: Steve de bonheur
// problem: https://www.hackerrank.com/challenges/between-two-sets

function getTotalX(a: number[], b: number[]): number {

  const min = Math.min(...a.concat(b));
  const max = Math.max(...a.concat(b));

  return Array(max - min + 1)
    .fill(0)
    .filter((_, index) => {
      const i = min + index;
      return a.every((x) => !(i % x)) && b.every((x) => !(x % i));
    }).length;
}
