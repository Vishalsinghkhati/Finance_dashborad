import Dashboard from "./components/Dashboard";
import { FinanceProvider } from "./context/FinanceContext";

function App() {
  return (
    <FinanceProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
        <Dashboard />
      </div>
    </FinanceProvider>
  );
}

export default App;