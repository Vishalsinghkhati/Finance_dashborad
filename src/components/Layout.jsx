import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">

      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col">

        <Navbar setOpen={setOpen} />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
};

export default Layout;