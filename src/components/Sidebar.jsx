import {
  LayoutDashboard,
  CreditCard,
  BarChart,
  Settings,
  X
} from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed md:static z-50
        top-0 left-0 h-full
        w-64
        bg-white dark:bg-gray-800
        shadow-lg p-6
        transform transition-transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        `}
      >

        {/* Mobile Close */}
        <div className="flex justify-between items-center mb-8 md:hidden">
          <h1 className="text-2xl font-bold">
            Finance
          </h1>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Desktop Title */}
        <h1 className="text-2xl font-bold mb-8 hidden md:block">
          FinanceAI
        </h1>

        <nav className="space-y-2">

          <Item icon={<LayoutDashboard />} text="Dashboard" />
          <Item icon={<CreditCard />} text="Transactions" />
          <Item icon={<BarChart />} text="Insights" />
          <Item icon={<Settings />} text="Settings" />

        </nav>

      </div>

    </>
  );
};

const Item = ({ icon, text }) => (
  <div
    className="
    flex items-center gap-3 
    p-3 rounded-lg 
    hover:bg-gray-100 
    dark:hover:bg-gray-700
    cursor-pointer transition
    "
  >
    {icon}
    {text}
  </div>
);

export default Sidebar;
