import Layout from "./Layout";
import SummaryCards from "./SummaryCards";
import Charts from "./Charts";
import Transactions from "./Transactions";
import Insights from "./Insights";

const Dashboard = () => {
  return (
    <Layout>

      <SummaryCards />

      <Charts />

      <Transactions />

      <Insights />

    </Layout>
  );
};

export default Dashboard;