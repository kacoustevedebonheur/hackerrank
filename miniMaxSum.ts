// https://www.hackerrank.com/challenges/mini-max-sum/problem
function miniMaxSum(arr) {
    const MIN = arr.reduce((acc, curr) => acc + curr, 0) - Math.max(...arr);
    const MAX = arr.reduce((acc, curr) => acc + curr, 0) - Math.min(...arr);
    console.log(`${MIN} ${MAX}`);
}
