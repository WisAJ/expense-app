import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
  <div className='dashboard'>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div> 
</div>
);

export default ExpenseDashboardPage;
