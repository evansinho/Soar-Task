import { useEffect } from "react";
import useStore from "../store/useStore";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BalanceHistory = () => {
  const { dashboard, fetchDashboardData } = useStore();
    useEffect(() => {
      fetchDashboardData();
  }, [fetchDashboardData]);

  if (!dashboard) return null;
  const data = dashboard.balanceHistory;
  console.log(data);
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
