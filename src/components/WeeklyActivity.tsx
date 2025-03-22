import { useEffect, useMemo } from "react";
import useStore from "../store/useStore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const WeeklyActivity = () => {
  const { dashboard, fetchDashboardData } = useStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const chartData = useMemo(() => dashboard?.weeklyActivity, [dashboard]);

  if (!dashboard) return null;

  return (
      <>
        <div className="weekly-activity">
          <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} aria-label="Weekly activity bar chart">
              <XAxis dataKey="day" aria-label="Days of the week" />
              <YAxis aria-label="Amount" />
              <Tooltip />
              <Bar dataKey="deposit" fill="#3b82f6" aria-label="Deposits" />
              <Bar dataKey="withdraw" fill="#f43f5e" aria-label="Withdrawals" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
  );
};

export default WeeklyActivity;
