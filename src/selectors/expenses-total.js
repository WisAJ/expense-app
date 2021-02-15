export default (expenses) => {
  console.log('I am the totoal',expenses.length)
  return expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
};
