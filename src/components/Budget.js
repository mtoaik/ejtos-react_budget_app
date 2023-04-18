import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'SET_BUDGET', payload:newBudget});
    };

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-secondary'>
         Budget: {/*<b>{currency}</b> */}
        <input 
            type="number"
            step={10}
            value={`${newBudget}`}
            onChange={(e) => {
                const upperLimit = 20000;
                const updatedBudget = Number(e.target.value);
                
                if (updatedBudget <= upperLimit && updatedBudget >= totalExpenses) 
                {
                    setNewBudget(Number(updatedBudget));
                    handleSubmit(e);
                }
                else if (updatedBudget < totalExpenses) {
                    alert('You can not reduce the budget value lower than the spending');
                }
                else {
                    alert(`Budget cannot exceed ${upperLimit}`) //${currency} 
                }
            }}
        />
        </div>
    );
};
export default Budget;

