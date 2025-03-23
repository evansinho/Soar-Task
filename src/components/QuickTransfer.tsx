import { useState, useMemo } from "react";
import ArrowRight from "../assets/arrowRight2.svg";
import SendArrow from "../assets/sendArrow.svg";
import useStore from "../store/useStore";
import { useEffect } from "react";

const QuickTransfer = () => {
  const { dashboard, fetchDashboardData } = useStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const [selectedContact, setSelectedContact] = useState<{ id: number; name: string; avatar: string } | null>(null);
  const [amount, setAmount] = useState("");

  const contacts = useMemo(() => dashboard ? dashboard.quickTransfer : [], [dashboard]);
  if (!dashboard) return null;

  const handleTransfer = () => {
    if (!selectedContact || !amount) return alert("Select a contact and enter an amount.");
    alert(`Transferred $${amount} to ${selectedContact.name}`);
    setAmount("");
  };

  return (
    <>
      <div className="recent-transaction mb-4 ml-4 md:ml-0">
        <h2 className="text-lg font-semibold">Quick Transfer</h2>
      </div>
      <div className="bg-white p-7 lg:rounded-3xl lg:shadow-md flex rounded-none shadow-none" role="region" aria-label="Quick Transfer Section">
        <div className="contacts ml-4">
          <div className="flex gap-4 mb-5">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`flex flex-col items-center p-1 ${
                  selectedContact?.id === contact.id ? "border-blue-500" : "border-gray-300"
                }`}
                aria-pressed={selectedContact?.id === contact.id}
                aria-label={`Select ${contact.name}`}
              >
                <img src={contact.avatar} alt={`${contact.name}'s avatar`} className="w-15 h-15 rounded-full" />
                <p className="text-sm mt-2">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.position}</p>
              </button>
            ))}
          </div>
          <div className="input-container my-7">
            <label htmlFor="amount" className="text-gray-500 text-sm">Write Amount</label>
            <div className="flex items-center rounded-full bg-[#EDF1F7] space-x-1">
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent rounded-full outline-none p-2"
                aria-label="Enter amount"
              />
              <button
                onClick={handleTransfer}
                className="bg-black text-white h-8 px-8 py-5 rounded-full flex items-center justify-center ml-2 hover:bg-gray-600"
                aria-label="Send Money"
              >
                Send
                <img src={SendArrow} alt="Send" className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
        <img src={ArrowRight} alt="Arrow Right" className="-mr-6 -mt-3" />
      </div>
    </>
  );
};

export default QuickTransfer;
