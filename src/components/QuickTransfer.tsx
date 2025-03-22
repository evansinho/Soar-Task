import { useState, useMemo } from "react";
import ArrowRight from "../assets/arrowRight.svg";
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
      <div className="recent-transaction">
        <h2 className="text-lg font-semibold mb-4">Quick Transfer</h2>
      </div>
      <div className="bg-white p-6 rounded-lg flex" role="region" aria-label="Quick Transfer Section">
        <div className="contacts">
          <div className="flex gap-4 mb-4">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`flex flex-col items-center p-3 border rounded-lg ${
                  selectedContact?.id === contact.id ? "border-blue-500" : "border-gray-300"
                }`}
                aria-pressed={selectedContact?.id === contact.id}
                aria-label={`Select ${contact.name}`}
              >
                <img src={contact.avatar} alt={`${contact.name}'s avatar`} className="w-10 h-10 rounded-full" />
                <p className="text-sm mt-2">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.position}</p>
              </button>
            ))}
          </div>
          <div className="input-container">
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
              aria-label="Enter amount"
            />
            <button
              onClick={handleTransfer}
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              aria-label="Send Money"
            >
              Send Money
            </button>
          </div>
        </div>
        <div className="arrow-container">
          <img src={ArrowRight} alt="Arrow Right" className="shadow-md" />
        </div>
      </div>
    </>
  );
};

export default QuickTransfer;
