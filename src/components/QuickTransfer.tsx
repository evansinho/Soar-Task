import { useState } from "react";
import ArrowRight from "../assets/arrowRight.svg";
import Livia from "../assets/liviaAvatar.svg";
import Randy from "../assets/randyAvatar.svg";
import WorkMan from "../assets/workmanAvatar.svg";

const QuickTransfer = () => {
  const contacts = [
    { id: 1, name: "John Doe", avatar: Livia },
    { id: 2, name: "Jane Smith", avatar: Randy },
    { id: 3, name: "Chris Johnson", avatar: WorkMan },
  ];

  const [selectedContact, setSelectedContact] = useState<{ id: number; name: string; avatar: string } | null>(null);
  const [amount, setAmount] = useState("");

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
      <div className="bg-white p-6 rounded-lg shadow-md flex">
        <div className="contacts">
          <div className="flex gap-4 mb-4">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`flex flex-col items-center p-3 border rounded-lg ${
                  selectedContact?.id === contact.id ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full" />
                <p className="text-sm mt-2">{contact.name}</p>
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
            />
            <button
              onClick={handleTransfer}
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Send Money
            </button>
          </div>
        </div>
        <div className="arrow-container">
          <img src={ArrowRight} alt="Arrow Right" className=" shadow-md "/>
        </div>
      </div>
    </>
  );
};

export default QuickTransfer;
