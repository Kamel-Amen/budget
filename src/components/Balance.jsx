import React from 'react';
import '../App.scss';
import moneyImg from './Icons/money.svg';
import creditImg from './Icons/credit_card.svg';
import dolorImg from './Icons/dolor.svg';

class Balance extends React.Component {
    render() {
        const { budgetData, expenseData, balanceData } = this.props;
        //console.log(balanceData);
        return (
            <div className="balance col-8 row m-0 text-center">
                <div className="col" id="budget">
                    <h3>BUDGET</h3>
                    <img src={moneyImg} alt="money" className="mx-auto d-block" />
                    <span className="text-success">$ {budgetData ? budgetData : 0}</span>
                </div>
                <div className="col" id="expenses">
                    <h3>EXPENSES</h3>
                    <img src={creditImg} alt="credit" className="mx-auto d-block" />
                    <span className="text-danger">$ {expenseData ? expenseData : 0}</span>
                </div>
                <div className="col" id="balance">
                    <h3>BALANCE</h3>
                    <img src={dolorImg} alt="dolor" className="mx-auto d-block" />
                    <span className={(balanceData < 0 ? 'text-danger' : 'text-success')}>$ {balanceData ? balanceData : 0}</span>
                </div>
            </div>
        );
    }
}

export default Balance;