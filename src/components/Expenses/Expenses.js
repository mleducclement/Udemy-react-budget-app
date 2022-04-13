import React, { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";

import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === "all"
    )
      return expense;
  });

  const sortedFilterExpenses = filteredExpenses.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });

  const filteredElements = () => {
    if (sortedFilterExpenses.length === 0) {
      return (
        <Card className="expenses">
          <Card className="expenses-list__fallback">No expenses found</Card>
        </Card>
      );
    }
    return (
      <div>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </div>
    );
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {filteredElements()}
    </Card>
  );
};

export default Expenses;
