import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Sat", deposit: 300, withdraw: 100 },
  { day: "Sun", deposit: 400, withdraw: 200 },
  { day: "Mon", deposit: 500, withdraw: 300 },
  { day: "Tue", deposit: 200, withdraw: 100 },
  { day: "Wed", deposit: 600, withdraw: 400 },
  { day: "Thu", deposit: 700, withdraw: 500 },
  { day: "Fri", deposit: 450, withdraw: 250 },
];

const WeeklyActivity = () => {
  return (
      <>
        <div className="weekly-activity">
          <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
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
