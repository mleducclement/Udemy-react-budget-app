import React, { useState } from "react";
import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {expenses.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
