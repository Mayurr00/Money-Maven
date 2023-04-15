import React, { useState } from 'react';

const Expensetracker = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const form = e.target;
    const expense = {
      name: form.name.value,
      amount: parseFloat(form.amount.value),
      date: new Date().toISOString(),
    };
    setExpenses([...expenses, expense]);
    form.reset();
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="dashboard">
      <h1>Expense Tracker</h1>
      <div className="summary">
        <h2>Total Expenses</h2>
        <p>${totalExpenses.toFixed(2)}</p>
      </div>
      <form onSubmit={handleAddExpense}>
        <input type="text" name="name" placeholder="Expense Name" required />
        <input type="number" name="amount" placeholder="Expense Amount" step="0.01" min="0" required />
        <button type="submit">Add Expense</button>
      </form>
      <div className="expenses">
        {expenses.map((expense, index) => (
          <div className="expense" key={index}>
            <h3>{expense.name}</h3>
            <p>${expense.amount.toFixed(2)}</p>
            <p>{new Date(expense.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expensetracker;
