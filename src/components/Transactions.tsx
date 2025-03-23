import { useEffect, memo } from "react";
import useStore from "../store/useStore";

const Transactions = () => {
  const { dashboard, fetchDashboardData } = useStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (!dashboard) return null;

  return (
    <>
      <div className="recent-transaction mb-4 ml-4 md:ml-0">
        <h2 className="text-lg text-[#343C6A] font-semibold">Recent Transactions</h2>
      </div>
      <div className="bg-white p-4 md:rounded-2xl md:shadow-md max-w-screen-lg mx-auto">
        <ul className="">
          {dashboard.transactions.map((tx) => (
            <li key={tx.id} className="flex justify-between pb-1">
              <img src={tx.imgSrc} alt={tx.imgAlt} className="w-10 h-10 md:w-12 md:h-12" />
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

export default memo(Transactions);
