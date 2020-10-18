import React from 'react';

function Child() {
    let transaction = [
        {amount: 500 , desc:"Cash"},
        {amount: -40 , desc:"Book"},
        {amount: -200 , desc:"Camera"},

    ]
    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>
            <h3>YOUR BALANCE <br /> $260</h3>

            <div className="expense-container">
                <h3>INCOME <br /> $500</h3>
                <h3>EXPENSE <br /> $240</h3>


            </div>
            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>
            </ul>


            <h3>Add new transaction</h3>
            <hr />
            <form className="transaction-form">
                <label>
                    Enter Description <br />
                    <input type="text" required></input>
                </label>
                <br/>
                <label>
                    Enter Amount <br />
                    <input type="number" required></input>
                </label>
                    <br/>
                <input type="submit" value="Add Transaction"></input>
            </form>
        </div>
    );
}

export default Child;
