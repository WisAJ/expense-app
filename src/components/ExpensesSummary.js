import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = ({ expenseCount, expensesTotal, expenseInvis, expenInvisTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const formattedInvisTotal = numeral((expenInvisTotal/100)- (expensesTotal/ 100)).format('$0,0.00') ;
  const invisWord =  (expenseInvis- expenseCount) === 1 ? 'expense' : 'expenses';
  const countInvis =  expenseInvis- expenseCount;
        


  return (
    <div className='summary'>
      <div className='content-container'>
        <h1 className='summary__text'>Viewing <span>{expenseCount}</span>  {expenseWord} totalling <span> {formattedExpensesTotal} </span></h1>
        <h3 className='summary__text'>Also <span>{countInvis}</span> hidden {invisWord} totalling <span> {formattedInvisTotal} </span></h3>
        <div className='summary__actions'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const invisExpenses = state.expenses;
 
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    expenseInvis: invisExpenses.length,
    expenInvisTotal: selectExpensesTotal(invisExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
;