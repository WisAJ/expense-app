import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import OptionModal from './OptionModal'

export class EditExpensePage extends React.Component {

  state = {
    selectedOption: false
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: false }));
  };

  handlePick = () => {
    this.setState(() => ({
      selectedOption: true
    }));
   
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

onRemove = () => {
  this.props.startRemoveExpense({ id: this.props.expense.id });
  this.props.history.push('/');
};

render() {

  return (
    <div>
      <div className='summary'>
        <div className='content-container'>
          <h1 className='summary__text'>Eidt Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
          />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
          onRemove = {this.onRemove}
          handlePick= {this.handlePick}
          />
        
      </div>
    </div>
  );
}
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
