import RoleSwitcher from "./RoleSwitcher";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu } from "lucide-react";

const Navbar = ({ setOpen }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div className="bg-white dark:bg-gray-800 
    shadow-sm px-6 py-4 
    flex justify-between items-center">

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden"
        >
          <Menu />
        </button>

        <h2 className="text-xl font-semibold">
          Financial Dashboard
        </h2>

      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg 
          bg-gray-100 dark:bg-gray-700"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <RoleSwitcher />

      </div>

    </div>
  );
};

export default Navbar;