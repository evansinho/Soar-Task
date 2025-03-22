import useStore from "../store/useStore";
import { useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ExpenseStatistics = () => {
  const { dashboard, fetchDashboardData } = useStore();

  useEffect(() => {
    fetchDashboardData();
}, [fetchDashboardData]);

  if (!dashboard) return null;

  return (
    <>
      <div className="weekly-activity">
        <h2 className="text-lg font-semibold mb-4">Expense Statistics</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={dashboard.expenseStats} dataKey="value" outerRadius={80} label>
              {dashboard.expenseStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ExpenseStatistics;
