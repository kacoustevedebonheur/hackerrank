// Auhtor: Steve de Bonheur
// Problem: https://www.hackerrank.com/challenges/the-birthday-bar/problem
function breakingRecords(scores: number[]): number[] {
    // Write your code here
    let min = scores[0], max = scores[0], minCount = 0, maxCount = 0;

  scores
    .filter((x, index) => index != 0)
    .forEach((x, index) => {
      if (x > max) {
        max = x;
        maxCount++;
      }

      if (x < min) {
        min = x;
        minCount++;
      }
    });
  return [maxCount, minCount] as number[];
}
