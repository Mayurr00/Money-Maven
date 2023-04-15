import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryTotals, setCategoryTotals] = useState({});
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/expenses');
      setExpenses(result.data);

      const total = result.data.reduce((acc, expense) => {
        return acc + expense.amount;
      }, 0);
      setTotalExpenses(total);

      const categoryList = result.data.reduce((acc, expense) => {
        if (!acc.includes(expense.category)) {
          acc.push(expense.category);
        }
        return acc;
      }, []);
      setCategories(categoryList);

      const categorySums = result.data.reduce((acc, expense) => {
        if (acc[expense.category]) {
          acc[expense.category] += expense.amount;
        } else {
          acc[expense.category] = expense.amount;
        }
        return acc;
      }, {});
      setCategoryTotals(categorySums);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const chartLabels = categories;
    const chartDataPoints = Object.values(categoryTotals);
    setChartData({
      labels: chartLabels,
      datasets: [
        {
          label: 'Expenses by Category',
          data: chartDataPoints,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, [categories, categoryTotals]);

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker Dashboard</h2>
      <div className="totals">
        <h3>Total Expenses</h3>
        <p>${totalExpenses.toFixed(2)}</p>
      </div>
      <div className="chart">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
