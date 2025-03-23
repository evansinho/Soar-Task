import React from "react";
import MyCards from "../components/MyCards";
import WeeklyActivity from "../components/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics";
import Transactions from "../components/Transactions";
import QuickTransfer from "../components/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory";

// Memoize components for performance optimization
const MemoizedMyCards = React.memo(MyCards);
const MemoizedWeeklyActivity = React.memo(WeeklyActivity);
const MemoizedExpenseStatistics = React.memo(ExpenseStatistics);
const MemoizedTransactions = React.memo(Transactions);
const MemoizedQuickTransfer = React.memo(QuickTransfer);
const MemoizedBalanceHistory = React.memo(BalanceHistory);

const Dashboard = () => {
  return (
    <div className="bg-white lg:bg-gray-100 min-h-screen p-0 sm:p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {/* Top section: Cards Sectio & Transactions Section */}
        <div className="lg:col-span-2 space-y-6">
          <MemoizedMyCards />
        </div>
        <div className="space-y-4">
          <MemoizedTransactions />
        </div>
      </div>

      {/* Middle Section: Charts & Statistics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <MemoizedWeeklyActivity />
        </div>
        <div className="space-y-6">
          <MemoizedExpenseStatistics />
        </div>
      </div>

      {/* Bottom Section: Quick Transfer & Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <MemoizedQuickTransfer />
        </div>
        <div className="lg:col-span-3 space-y-6">
          <MemoizedBalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
