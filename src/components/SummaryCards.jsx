import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const SummaryCards = () => {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expenses;

  return (
    <div className="grid md:grid-cols-3 gap-6">

      <Card
        title="Total Balance"
        value={balance}
        icon={<Wallet />}
        color="bg-blue-500"
        delay={0}
      />

      <Card
        title="Income"
        value={income}
        icon={<TrendingUp />}
        color="bg-green-500"
        delay={0.2}
      />

      <Card
        title="Expenses"
        value={expenses}
        icon={<TrendingDown />}
        color="bg-red-500"
        delay={0.4}
      />

    </div>
  );
};

const Card = ({ title, value, color, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.03 }}
    className="
    bg-white dark:bg-gray-800
    text-black dark:text-white
    p-6 rounded-xl shadow
    hover:shadow-xl
    transition-all
    "
  >

    <div className="flex justify-between items-center">

      <div>
        <p className="text-gray-500 dark:text-gray-400">
          {title}
        </p>

        <h2 className="text-2xl font-bold mt-2">
          ₹{value.toLocaleString()}
        </h2>
      </div>

      <div
        className={`${color} 
        text-white 
        p-3 
        rounded-xl 
        shadow-md`}
      >
        {icon}
      </div>

    </div>

  </motion.div>
);

export default SummaryCards;