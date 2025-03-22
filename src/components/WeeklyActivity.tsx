import { useEffect } from "react";
import useStore from "../store/useStore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const WeeklyActivity = () => {
  const { dashboard, fetchDashboardData } = useStore();

  useEffect(() => {
    fetchDashboardData();
}, [fetchDashboardData]);

  if (!dashboard) return null;

  return (
      <>
        <div className="weekly-activity">
          <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dashboard.weeklyActivity}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="deposit" fill="#3b82f6" />
              <Bar dataKey="withdraw" fill="#f43f5e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
  );
};

export default WeeklyActivity;
