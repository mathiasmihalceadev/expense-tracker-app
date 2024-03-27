import ExpensesItem from "./ExpensesItem.jsx"
import React, {useState, useEffect} from 'react';

function ExpensesList({onSumChange}) {
    const date = new Date();
    const options = {month: 'short', day: 'numeric'};
    const expensesDate = date.toLocaleDateString('en-US', options);

    const data = localStorage.getItem('expenses');
    let parsedData = [];

    if (data) {
        parsedData = JSON.parse(data);
    }

    const [sum, setSum] = useState(0);
    useEffect(() => {
        let total = 0;
        parsedData.forEach(item => {
            total += parseInt(item.amount);
        });
        setSum(total);

        onSumChange(total);
    }, [data, onSumChange]);

    return (
        <div className="mt-6 mb-4">
            <p className="font-bold mb-3">Today, {expensesDate}</p>
            {parsedData.length === 0 ? (
                <p>No expenses yet.</p>
            ) : (
                <div>
                    {parsedData.reverse().map(item => (
                        <ExpensesItem key={item.id} item={item}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ExpensesList;
