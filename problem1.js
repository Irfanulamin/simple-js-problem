function calculateMoney(ticketSale) {
  if (typeof ticketSale === "number" && ticketSale >= 0) {
    const ticketPrice = 120;
    const guardsCut = 500;
    const staffLunchExpensePerStaff = 50;
    const numberOfStaff = 8;

    // total income
    const totalIncome = ticketPrice * ticketSale;

    // total expenses
    const totalStaffLunchExpense = staffLunchExpensePerStaff * numberOfStaff;
    const totalExpenses = guardsCut + totalStaffLunchExpense;

    // total profit
    const profit = totalIncome - totalExpenses;

    // Returning the profit message
    return `Your Today's Income Is ${profit}`;
  }

  // If ticketSale is not a valid number, returning an error message
  return `Sorry, You can't put a invalid number`;
}

console.log(calculateMoney(10));
