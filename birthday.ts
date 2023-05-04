// Author: Steve de bonheur 
// Problem: https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s: number[], d: number, m: number): number {
    return s.filter((x, index) => (s.slice(index, index + m).reduce((acc, curr) => acc + curr, 0) === d)).length;
}
