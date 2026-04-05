import { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";
import AddTransactionModal from "./AddTransactionModal";
import { Trash2 } from "lucide-react";

const Transactions = () => {
  const {
    transactions,
    role,
    deleteTransaction
  } = useContext(FinanceContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow mt-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold">
          Transactions
        </h2>

        {role === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Transaction
          </button>
        )}

      </div>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6 flex-wrap">

        <input
          type="text"
          placeholder="Search..."
          className="border dark:border-gray-600 
          bg-white dark:bg-gray-700 
          p-2 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border dark:border-gray-600 
          bg-white dark:bg-gray-700 
          p-2 rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>

          <tbody>

            {filteredTransactions.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6"
                >
                  No transactions found
                </td>
              </tr>
            ) : (
              filteredTransactions.map((t) => (
                <tr
                  key={t.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-3">
                    {t.date}
                  </td>

                  <td>
                    <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {t.category}
                    </span>
                  </td>

                  <td className="font-semibold">
                    ₹{t.amount}
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        t.type === "income"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {t.type}
                    </span>
                  </td>

                  {/* Delete Button */}
                  {role === "admin" && (
                    <td>
                      <button
                        onClick={() =>
                          deleteTransaction(t.id)
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  )}

                </tr>
              ))
            )}

          </tbody>

        </table>
      </div>

      {showModal && (
        <AddTransactionModal
          close={() => setShowModal(false)}
        />
      )}

    </div>
  );
};

export default Transactions;