import MyCards from "../components/MyCards";
import WeeklyActivity from "../components/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics";
import Transactions from "../components/Transactions";
import QuickTransfer from "../components/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cards Section */}
        <div className="lg:col-span-2 space-y-6">
          <MyCards />
        </div>

        {/* Transactions Section */}
        <div className="space-y-6">
          <Transactions />
        </div>
      </div>

      {/* Charts & Statistics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>

      {/* Bottom Section: Quick Transfer & Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <QuickTransfer />
        <BalanceHistory />
      </div>  
    </div>
  );
};

export default Dashboard;
