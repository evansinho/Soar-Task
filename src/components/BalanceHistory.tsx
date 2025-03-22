import { useEffect, useMemo } from "react";
import useStore from "../store/useStore";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BalanceHistory = () => {
  const { dashboard, fetchDashboardData } = useStore();
    useEffect(() => {
      fetchDashboardData();
  }, [fetchDashboardData]);

  const data = useMemo(() => dashboard?.balanceHistory, [dashboard]);
  if (!dashboard) return null;
;
  return (
    <>
      <div className="recent-transaction">
        <h2 className="text-lg font-semibold mb-4">Balance History</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height={250} aria-label="Balance History Chart">
          <LineChart data={data}>
            <XAxis dataKey="month" aria-label="Month" />
            <YAxis aria-label="Balance" />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={2} aria-label="Balance Line" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BalanceHistory;
