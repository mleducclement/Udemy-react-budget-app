import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <Card className="expenses-list__fallback">No expenses found</Card>;
  }

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
