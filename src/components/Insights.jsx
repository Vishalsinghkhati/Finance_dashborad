import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Insights = () => {
  const { transactions } = useContext(FinanceContext);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const highestExpense = transactions
    .filter((t) => t.type === "expense")
    .sort((a, b) => b.amount - a.amount)[0];

  const balance = totalIncome - totalExpense;

  return (
    <div className="grid md:grid-cols-4 gap-6 mt-6">

      {/* Total Income */}
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-gray-500 dark:text-gray-400">
          Total Income
        </h3>
        <p className="text-2xl font-bold text-green-500 mt-2">
          ₹{totalIncome}
        </p>
      </div>

      {/* Total Expense */}
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-gray-500 dark:text-gray-400">
          Total Expense
        </h3>
        <p className="text-2xl font-bold text-red-500 mt-2">
          ₹{totalExpense}
        </p>
      </div>

      {/* Balance */}
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-gray-500 dark:text-gray-400">
          Current Balance
        </h3>
        <p className="text-2xl font-bold text-blue-500 mt-2">
          ₹{balance}
        </p>
      </div>

      {/* Highest Expense */}
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-gray-500 dark:text-gray-400">
          Highest Expense
        </h3>
        <p className="text-xl font-semibold mt-2">
          {highestExpense?.category || "No Data"}
        </p>

        <p className="text-sm text-gray-500">
          ₹{highestExpense?.amount || 0}
        </p>
      </div>

    </div>
  );
};

export default Insights;