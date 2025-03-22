import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", balance: 5000 },
  { month: "Feb", balance: 4800 },
  { month: "Mar", balance: 5200 },
  { month: "Apr", balance: 5100 },
  { month: "May", balance: 5300 },
  { month: "Jun", balance: 5500 },
];

const BalanceHistory = () => {
  return (
    <>
      <div className="recent-transaction">
        <h2 className="text-lg font-semibold mb-4">Balance History</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BalanceHistory;
