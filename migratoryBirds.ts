// Author: Steve de bonheur
// Problem: https://www.hackerrank.com/challenges/migratory-birds
function migratoryBirds(arr) {
  let typeMap = {};

  arr.forEach((x) => {
    typeMap[x] = 0;
  });

  arr.forEach((x) => {
    typeMap[x] += 1;
  });
  const ids = Object.entries(typeMap).filter(
    ([_, value]) => value === Math.max(...Object.values(typeMap))
  );

  return ids.length > 1
    ? ids.filter(([key, value]) => {
        let keys = ids.map((x) => +x[0]);
        return +key === Math.min(...keys);
      })[0][0]
    : ids[0][0];
}
