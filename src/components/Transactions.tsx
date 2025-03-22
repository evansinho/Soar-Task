import depositIcon from "../assets/deposits.svg";
import paypalIcon from "../assets/paypalIcon.svg";
import dollarsIcon from "../assets/dollarsIcon.svg"

const Transactions = () => {
  const transactions = [
    { id: 1, name: "Deposit from my Card", date: "25 Jan 2021", amount: "-$850", imgSrc: depositIcon, imgAlt: "Deposit Icon" },
    { id: 2, name: "Deposit PayPal", date: "25 Jan 2021", amount: "+$1,200", imgSrc: paypalIcon, imgAlt: "PayPal Icon" },
    { id: 3, name: "Jeni Wilson", date: "21 Jan 2021", amount: "+$5,400", imgSrc: dollarsIcon, imgAlt: "Dollars Icon" },
  ];

  return (
    <>
      <div className="recent-transaction">
        <h2 className="text-lg text-[#343C6A] font-semibold mb-4">Recent Transactions</h2>
      </div>
      <div className="bg-white p-3 rounded-2xl shadow-md">
        <ul className="space-y-2">
          {transactions.map((tx) => (
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
