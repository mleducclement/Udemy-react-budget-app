import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filteredExpenses }) => {
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
