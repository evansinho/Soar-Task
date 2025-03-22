import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Entertainment", value: 30, color: "#f97316" },
  { name: "Bill Expense", value: 15, color: "#eab308" },
  { name: "Investment", value: 20, color: "#3b82f6" },
  { name: "Others", value: 35, color: "#64748b" },
];

const ExpenseStatistics = () => {
  return (
    <>
      <div className="weekly-activity">
        <h2 className="text-lg font-semibold mb-4">Expense Statistics</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={data} dataKey="value" outerRadius={80} label>
              {data.map((entry, index) => (
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
