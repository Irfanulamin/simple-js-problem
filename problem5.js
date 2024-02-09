function monthlySavings(allPayments, livingCost) {
  if (!Array.isArray(allPayments) || typeof livingCost !== "number") {
    return "Invalid input";
  }

  let totalIncome = 0;
  for (let i = 0; i < allPayments.length; i++) {
    totalIncome += allPayments[i];
  }

  let totalTax = 0;
  for (let j = 0; j < allPayments.length; j++) {
    if (allPayments[j] > 3000) {
      totalTax += allPayments[j] * 0.2;
    }
  }

  const totalSavings = totalIncome - totalTax - livingCost;

  if (totalSavings >= 0) {
    return totalSavings;
  } else {
    return "earn more";
  }
}

let payments = [1000, 2000, 2500];
let livingCost = 5000;
console.log(monthlySavings([900, 2700, 3400], 10000));
