// Author: Steve de bonheur
// Probelm: https://www.hackerrank.com/challenges/bon-appetit

function bonAppetit(bill, k, b) {
  const paidAmount = bill.filter((b, i) => i !== k).reduce((acc, curr) => acc + curr, 0) / 2;
  
  if(b > paidAmount) {
      console.log(b - paidAmount);
  }
  
  if(paidAmount === b) {
      console.log("Bon Appetit")
  }
}

