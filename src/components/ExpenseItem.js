import React from 'react';
import './ExpenseItem.css';

export const ExpenseItem = () => {
    const expenseDate= new Date(2021, 0, 14);
    const expenseTitle = 'Diner';
    const expenseAmount = 320.64;

    return (
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">{expenseAmount}</div>
        </div>
      </div>
    );
}
