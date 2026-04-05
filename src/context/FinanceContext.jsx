import { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [role, setRole] = useState("admin");

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2024-03-01",
      category: "Salary",
      amount: 50000,
      type: "income"
    },
    {
      id: 2,
      date: "2024-03-02",
      category: "Food",
      amount: 1200,
      type: "expense"
    }
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((t) => t.id !== id)
    );
  };

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        role,
        setRole,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};