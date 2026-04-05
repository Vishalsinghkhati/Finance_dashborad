import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const Charts = () => {
  const { transactions } = useContext(FinanceContext);

  // Monthly Balance Trend
  const monthlyData = transactions.reduce((acc, t) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short"
    });

    const existing = acc.find(m => m.month === month);

    if (existing) {
      existing.amount += t.type === "income" ? t.amount : -t.amount;
    } else {
      acc.push({
        month,
        amount: t.type === "income" ? t.amount : -t.amount
      });
    }

    return acc;
  }, []);

  // Category Breakdown
  const categoryData = transactions.reduce((acc, t) => {
    const existing = acc.find(c => c.name === t.category);

    if (existing) {
      existing.value += t.amount;
    } else {
      acc.push({
        name: t.category,
        value: t.amount
      });
    }

    return acc;
  }, []);

  const COLORS = [
    "#3b82f6",
    "#22c55e",
    "#ef4444",
    "#f59e0b",
    "#8b5cf6"
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">

      {/* Line Chart */}
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow transition">

        <h3 className="font-semibold mb-4">
          Balance Trend
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlyData}>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow transition">

        <h3 className="font-semibold mb-4">
          Spending Breakdown
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={90}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default Charts;