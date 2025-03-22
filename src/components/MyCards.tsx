import { Link } from "react-router-dom";
import BlackChip from "../assets/Chip_Card_black.svg";
import WhiteChip from "../assets/Chip_Card_white.svg";
import masterLogoBlack from "../assets/masterLogo_black.svg";
import masterLogoWhite from "../assets/masterLogo_white.svg";

const MyCards = () => {
  const cards = [
    { 
      id: 1,
      name:"Eddy Cusuma", 
      balance: "$5,756", 
      chip:WhiteChip, 
      logo:masterLogoWhite, 
      chipLabel:"White Card Chip", 
      logoLabel:"White master Logo", 
      number: "3778 **** **** 1234", 
      expiry: "12/22",
      bgColor: "linear-gradient(135deg, #5B5A6F 0%, #1C1C1C 100%)",
      textColor: "text-white"
    },
    { 
      id: 2, 
      name:"Eddy Cusuma", 
      balance: "$3,450", 
      chip:BlackChip, 
      logo:masterLogoBlack,  
      chipLabel:"Black Card Chip", 
      logoLabel:"Black master Logo", 
      number: "3778 **** **** 1234",
      expiry: "11/23",
      bgColor: "#FAFAFA",
      textColor: "text-black"
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg md:text-xl lg:text-2xl text-[#343C6A] font-semibold mb-4">My Cards</h2>
        <Link to="/#" className="text-[#343C6A] text-sm md:text-base lg:text-lg">See All</Link>
      </div>
      <div className="flex align-center w-full gap-1 md:gap-1 lg:gap-2 xl:gap-8">
        {cards.map((card) => (
          <div key={card.id} className={`p-3 md:p-4 lg:p-5 rounded-3xl flex flex-col ${card.textColor} border border-gray-300 flex-grow`} style={{ background: card.bgColor }}>
              <div className="card-top-details flex justify-between items-center">
                <div className="balance">
                  <p className="text-xs md:text-sm lg:text-sm">Balance</p>
                  <h3 className="text-sm md:text-sm lg:text-xl">{card.balance}</h3>
                </div>
                <img src={card.chip} alt={card.chipLabel} className="w-6 md:w-8 lg:w-10" />
              </div>
              <div className="card-details-middle my-4 flex justify-between items-center">
                <div className="name">
                  <span className="text-xs md:text-xs lg:text-sm">CARD HOLDER</span><br />
                  <span className="text-sm md:text-sm lg:text-base">{card.name}</span>
                </div>
                <div className="valid">
                  <span className="text-xs md:text-xs lg:text-sm">VALID THRU</span><br />
                  <span className="text-xs md:text-xs lg:text-sm">{card.expiry}</span>
                </div>
              </div>
            <div className="card-details-bottom flex justify-between items-center mt-4 border-t-2 border-gray-500 pt-3 w-full">
              <p className="text-sm md:text-base lg:text-lg">{card.number}</p>
              <img src={card.logo} alt={card.logoLabel} className="w-6 md:w-8 lg:w-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCards;
