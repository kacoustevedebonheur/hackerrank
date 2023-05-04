// https://www.hackerrank.com/challenges/drawing-book/problem
function pageCount(n, p) {
  if (p === 1 || n === p) {
    return 0;
  }

  if (n - p === 1 && n % 2 === 0) {
    return 1;
  }
  const start = p % 2 === 0 ? p / 2 : Math.floor(p / 2);
  const end = (n - p) % 2 === 0 ? (n - p) / 2 : Math.floor((n - p) / 2);
  return Math.min(start, end);
}

const n = pageCount(6, 5);
console.log(n);
