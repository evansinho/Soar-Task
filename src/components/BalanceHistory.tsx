import { useEffect, useMemo } from "react";
import useStore from "../store/useStore";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

const BalanceHistory = () => {
  const { dashboard, fetchDashboardData } = useStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);
  
  const data = useMemo(() => dashboard?.balanceHistory, [dashboard]);

  if (!dashboard || !data || data.length === 0) return null;

  return (
    <>
      <div className="recent-transaction mb-4 ml-4 md:ml-0">
        <h2 className="text-lg font-semibold">Balance History</h2>
      </div>
      <div className="bg-white p-3 sm:p-6 sm:rounded-2xl sm:shadow-md">
        <ResponsiveContainer width="100%" height={250} aria-label="Balance History Chart">
          <LineChart data={data}>
            <defs>
              <linearGradient id="balanceGradient">
                <stop offset="0%" stopColor="#1814F3"/>
                <stop offset="100%" stopColor="#1814F3"/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="5 6" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} />
            <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#1814F3"
              strokeWidth={5}
              fillOpacity={0.1}
              fill="url(#balanceGradient)"
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#1814F3"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BalanceHistory;
