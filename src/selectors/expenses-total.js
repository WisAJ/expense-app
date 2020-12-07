export default (expenses) => {
        return expenses.reduce((sum, value) => sum + value.amount, 0); 
};

//  another way with map:
// return expenses
//         .map((expense)=> expense.amount)
//         .reduce((sum, value) => sum + value, 0);
