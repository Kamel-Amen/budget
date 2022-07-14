import React from 'react';
import '../App.scss';

class Expense extends React.Component {
    render() {
        return (
            <div className="expense col-4 border border-danger border-3 bg-light p-4">
                <h4>Please Enter Your Expense</h4>
                <input type="text" placeholder='Type Expense Here' id="expenseTitle" className="mb-4 w-100" />
                <h4>Please Enter Expense Amount</h4>
                <input type="number" placeholder='Type Expense Amount' id="expenseAmount" className="mb-4 w-100" />
                <button className="btn btn-danger border-2 bg-light text-danger" onClick={() => this.props.onClick()}>Add Expense</button>
            </div>
        );
    }
}

export default Expense;