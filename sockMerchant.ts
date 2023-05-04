// Author: Steve de bonheur
// Problem: https://www.hackerrank.com/challenges/sock-merchant

function sockMerchant(ar) {
  const counts = {};
  ar.forEach((c) => {
    counts[c] = 0;
  });

  ar.forEach((c) => {
    counts[c] += 1;
  });

  return Object.keys(counts)
    .filter((c) => counts[c] >= 2)
    .map((c) => Math.floor(counts[c] / 2))
    .reduce((acc, curr) => acc + curr, 0);
}
