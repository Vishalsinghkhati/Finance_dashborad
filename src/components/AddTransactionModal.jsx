import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const AddTransactionModal = ({ close }) => {
  const { addTransaction } = useContext(FinanceContext);

  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: Date.now(),
      ...form,
      amount: Number(form.amount)
    });

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl w-96 shadow-lg transition-all">

        <h2 className="text-xl font-bold mb-4">
          Add Transaction
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="date"
            required
            className="w-full border dark:border-gray-600 bg-white dark:bg-gray-700 p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Category"
            required
            className="w-full border dark:border-gray-600 bg-white dark:bg-gray-700 p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Amount"
            required
            className="w-full border dark:border-gray-600 bg-white dark:bg-gray-700 p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
          />

          <select
            className="w-full border dark:border-gray-600 bg-white dark:bg-gray-700 p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <div className="flex justify-end gap-2">

            <button
              type="button"
              onClick={close}
              className="px-4 py-2 border dark:border-gray-600 rounded"
            >
              Cancel
            </button>

            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              Add
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddTransactionModal;