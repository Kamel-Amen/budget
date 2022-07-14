import React, { Component } from 'react';
import '../App.scss';

class Budget extends Component {
    render() {
        return (
            <div className="budget col-4 border border-success border-3 bg-light p-4">
                <h3>Please Enter Your Budget</h3>
                <input type="number" placeholder='0' id="budget" className="w-100 mb-4" />
                <button className="btn border-success border-2 bg-light text-success" onClick={() => this.props.onClick()}>Calculate</button>
            </div>
        );
    }
}

export default Budget;