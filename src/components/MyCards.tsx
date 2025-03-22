import { Link } from "react-router-dom";
import { useEffect, memo } from "react";
import useStore from "../store/useStore";

const MyCards = () => {
  const { dashboard, fetchDashboardData } = useStore();

  useEffect(() => {
    fetchDashboardData();
}, [fetchDashboardData]);

  if (!dashboard) return null;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg md:text-xl lg:text-2xl text-[#343C6A] font-semibold mb-4">My Cards</h2>
        <Link to="/#" className="text-[#343C6A] text-sm md:text-base lg:text-lg" aria-label="See All Cards">See All</Link>
      </div>
      <div className="flex align-center w-full gap-1 md:gap-1 lg:gap-2 xl:gap-8">
        {dashboard.cards.map((card) => (
          <div key={card.id} className={`p-3 md:p-4 lg:p-5 rounded-3xl flex flex-col ${card.textColor} border border-gray-300 flex-grow`} style={{ background: card.bgColor }} aria-label={`Card ending in ${card.number.slice(-4)}`}>
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
                  <span className="text-sm md:text-sm lg:text-base">{card.cardHolder}</span>
                </div>
                <div className="valid">
                  <span className="text-xs md:text-xs lg:text-sm">VALID THRU</span><br />
                  <span className="text-xs md:text-xs lg:text-sm">{card.validThru}</span>
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

export default memo(MyCards);
