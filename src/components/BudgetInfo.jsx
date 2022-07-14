import React from 'react';
import '../App.scss';
import trash from './Icons/delete.svg';
import edit from './Icons/edit.svg';

class BudgetInfo extends React.Component {
    render() {
        const { data, handleEdit, handleDelete } = this.props;
        return (
            <div className="info row text-center m-0 col-8">
                <div className="num col-1">
                    <h5>ID</h5>
                    {data.map(e => <h5 className="text-primary" key={e.id}>{e.id}</h5>)}
                </div>
                <div className="expenseTitle col-6">
                    <h5>Expense Title</h5>
                    <div id="titles text-left">
                        {data.map(e => <h5 className="text-danger" key={e.id}>{e.title}</h5>)}
                    </div>
                </div>
                <div className="expenseValue col-3">
                    <h5>Expense Value</h5>
                    <div id="values text-left">
                        {data.map(e => <h5 className="text-success" key={e.id}>{e.amount}$</h5>)}
                    </div>
                </div>
                <div className="tools col-2">
                    <h5>Tools</h5>
                    <div id="tools">
                        {data.map(item => {
                            return (
                                <div key={item.id + 1} id={item.id}>
                                    <button className="btn p-0">
                                        <img src={edit} alt="edit" id="icon" onClick={handleEdit} />
                                    </button>
                                    <button className="btn p-0">
                                        <img src={trash} alt="trash" id="icon" onClick={handleDelete} />
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default BudgetInfo;