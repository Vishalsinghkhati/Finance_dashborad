import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div className="flex items-center gap-2">

      <span className="text-sm text-gray-500 dark:text-gray-400">
        Role:
      </span>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="px-3 py-1 rounded-lg border 
        bg-white dark:bg-gray-700 
        text-black dark:text-white 
        border-gray-300 dark:border-gray-600
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      {/* Role Badge */}
      <span
        className={`px-2 py-1 text-xs rounded-full text-white ${
          role === "admin"
            ? "bg-blue-500"
            : "bg-gray-500"
        }`}
      >
        {role}
      </span>

    </div>
  );
};

export default RoleSwitcher;