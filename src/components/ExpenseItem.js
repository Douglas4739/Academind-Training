import React from 'react';
import './ExpenseItem.css';

export const ExpenseItem = () => {
    return (
      <div className="expense">
        <div>01/14/2021</div>
        <div>
          <h2>Diner</h2>
          <p>$320</p>
        </div>
      </div>
    );
}
