import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Budget from './components/Budget';
import Expense from './components/Expense';
import Balance from './components/Balance';
import BudgetInfo from './components/BudgetInfo';

class App extends React.Component {
  state = {
    budget: 0,
    expense: {
      title: '',
      amount: 0,
      id: 0
    },
    totalExpenses: [],
    totalAmount: 0,
    balance: 0
  }

  /* S/ Handling The Budget Component */
  handleBudget = () => {
    const budget = parseInt(document.querySelector('#budget').value);
    if (budget) {
      this.setState({ budget });
    } else {
      alert('Please Enter Your Budget Value !');
      document.querySelector('#budget').focus();
    }
  }
  /* E/ Handling The Budget Component */

  /* S/ Handling The Expense Component */
  handleExpense = () => {
    let expenseTitle = document.querySelector('#expenseTitle').value;
    let expenseAmount = document.querySelector('#expenseAmount').value;
    const expense = {
      title: expenseTitle,
      amount: expenseAmount,
      id: this.state.expense.id + 1
    }

    if (expenseTitle === '' || expenseAmount === 0) {
      alert('Please Enter Expense Title And Amount !!');
    } else {
      this.setState({ expense }, () => this.pushingExpense());
      document.querySelector('#expenseTitle').value = '';
      document.querySelector('#expenseAmount').value = 0;
      document.querySelector('#expenseTitle').focus();
    }
  }
  /* E/ Handling The Expense Component */

  /* S/ Handling The Balance Component */
  pushingExpense() {
    this.state.totalExpenses.push(this.state.expense);
    this.setState({ totalExpenses: this.state.totalExpenses });
    this.calculate();
  }
  calculate() {
    let totalAmount = 0;
    this.state.totalExpenses.forEach(e => {
      totalAmount = parseInt(totalAmount) + parseInt(e.amount);
    });
    this.setState({ totalAmount, balance: this.state.budget - totalAmount });
  }
  /* E/ Handling The Balance Component */

  /* S/ Handling The Info Component */
  handleEdit = e => {
    let expenseIndex = 0;
    let expenseId = e.target.parentNode.parentNode.getAttribute('id');
    this.state.totalExpenses.forEach(expense => {
      if (expense.id === parseInt(expenseId--)) expenseIndex = this.state.totalExpenses.indexOf(expense)
    });
    const expense = this.state.totalExpenses[expenseIndex];
    const titleInput = document.querySelector('#expenseTitle');
    const amountInput = document.querySelector('#expenseAmount');
    this.state.totalExpenses.splice(expenseIndex, 1);
    this.state.totalExpenses.forEach(ele => { ele.id--; });
    this.setState({ totalExpenses: this.state.totalExpenses });
    titleInput.value = expense.title;
    amountInput.value = expense.amount;
    this.calculate();
  }
  handleDelete = e => {
    let expenseIndex = 0;
    let expenseId = e.target.parentNode.parentNode.getAttribute('id');
    this.state.totalExpenses.forEach(expense => {
      if (expense.id === parseInt(expenseId--)) expenseIndex = this.state.totalExpenses.indexOf(expense)
      expense.id--;
    });
    this.state.totalExpenses.splice(expenseIndex, 1);
    this.setState({ totalExpenses: this.state.totalExpenses });
    this.calculate();
  }
  /* E/ Handling The Info Component */

  render() {
    return (
      <div className="app p-3">
        <h2>BUDGET APP</h2>
        <div className="row w-100 m-0 mt-4">
          <Budget onClick={this.handleBudget} />
          <Balance budgetData={this.state.budget} expenseData={this.state.totalAmount} balanceData={this.state.balance} />
        </div>
        <div className="row w-100 m-0 mt-5">
          <Expense onClick={this.handleExpense} />
          <BudgetInfo data={this.state.totalExpenses} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default App;