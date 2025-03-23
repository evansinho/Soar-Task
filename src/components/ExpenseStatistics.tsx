import useStore from "../store/useStore";
import { useEffect, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ExpenseStatistics = () => {
  const { dashboard, fetchDashboardData } = useStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const pieData = useMemo(() => dashboard?.expenseStats || [], [dashboard]);

  if (!dashboard) return null;

  return (
    <>
      <div className="weekly-activity mb-4 ml-4 md:ml-0">
        <h2 className="text-lg font-semibold">Expense Statistics</h2>
      </div>
      <div className="bg-white p-6 sm:rounded-2xl sm:shadow-md">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart aria-label="Expense Statistics Pie Chart">
            <Pie 
              data={pieData} 
              dataKey="value" 
              outerRadius={110}
              innerRadius={1}
              cx="50%"
              cy="50%"
              paddingAngle={5}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <>
                    <text
                      x={x}
                      y={y - 8}
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="central"
                    >
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                    <text
                      x={x}
                      y={y + 8}
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {`${pieData[index].name}`}
                    </text>
                  </>
                );
              }}
              labelLine={false}
            >
              {pieData.map((entry, index) => (
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
