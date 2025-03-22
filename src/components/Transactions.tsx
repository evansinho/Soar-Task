import { useEffect } from "react";
import useStore from "../store/useStore";

const Transactions = () => {
  const { dashboard, fetchDashboardData } = useStore();

    useEffect(() => {
      fetchDashboardData();
  }, [fetchDashboardData]);
  
    if (!dashboard) return null;

  return (
    <>
      <div className="recent-transaction">
        <h2 className="text-lg text-[#343C6A] font-semibold mb-4">Recent Transactions</h2>
      </div>
      <div className="bg-white p-3 rounded-2xl shadow-md">
        <ul className="space-y-2 p-1">
          {dashboard.transactions.map((tx) => (
            <li key={tx.id} className="flex justify-between pb-1">
              <img src={tx.imgSrc} alt={tx.imgAlt} />
              <div className="text-left">
                <p className="font-medium">{tx.name}</p>
                <p className="text-sm text-gray-500">{tx.date}</p>
              </div>
              <p className={`font-medium ${tx.amount.includes("-") ? "text-red-500" : "text-green-500"}`}>
                {tx.amount}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Transactions;
