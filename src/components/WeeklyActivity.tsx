import { useEffect, useMemo } from "react";
import useStore from "../store/useStore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const WeeklyActivity = () => {
  const { dashboard, fetchDashboardData } = useStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const chartData = useMemo(() => dashboard?.weeklyActivity, [dashboard]);

  if (!dashboard) return null;

  const barSize = window.innerWidth < 768 ? 10 : 15;
  const containerClass = window.innerWidth > 768 ? "bg-white p-4 rounded-2xl shadow-md" : "bg-white p-4";

  return (
    <div className="weekly-activity ml-4 md:ml-0">
      <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
      <div className={containerClass}>
        <ResponsiveContainer width="100%" height={275}>
          <BarChart data={chartData} aria-label="Weekly activity bar chart" barSize={barSize} margin={{ right: 50 }} barCategoryGap="10%">
            <CartesianGrid strokeDasharray="0" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="day" aria-label="Days of the week" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis aria-label="Amount" tick={{ fontSize: 12 }} domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend verticalAlign="top" align="right" iconType="circle" formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} wrapperStyle={{ padding: '10px', fontSize: '15px', marginRight: '40px' }} />
            <Bar dataKey="withdraw" fill="#000000" aria-label="Withdrawals" radius={[10, 10, 10, 10]} />
            <Bar dataKey="deposit" fill="#396AFF" aria-label="Deposits" radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyActivity;
