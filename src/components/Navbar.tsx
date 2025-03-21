import { useLocation } from "react-router-dom";
import navSettingIcon from "../assets/navSetting.svg";
import notificationIcon from "../assets/notification.svg";
import profileIcon from "../assets/profileIcon.svg";
import searchIcon from "../assets/searchIcon.svg";

const Navbar = () => {
  const location = useLocation();
  const getTitle = () => {
    if (location.pathname === "/dashboard" || location.pathname === "/") {
      return "Overview";
    } else if (location.pathname === "/settings") {
      return "Setting";
    }
  };

  return (
    <>
      <nav className="bg-white p-5 text-black lg:flex md:flex hidden justify-between items-center border border-gray-200 border-t-0 w-full overflow-x-hidden">
        <h2 className="text-xl md:text-xl lg:text-3xl font-semibold text-[#343C6A] text-center md:text-left flex-grow">{getTitle()}</h2>
        <div className="flex items-center lg:space-x-6 md:space-x-2">
          <div className="relative w-full md:w-auto">
            <img src={searchIcon} className="absolute md:left-1.5 lg:left-5 left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" alt="Search icon" />
            <input
              type="text"
              placeholder="Search for something"
              className="lg:p-3 md:p-2 w-full md:w-48 lg:w-64 text-lg md:text-sm sm:text-sm rounded-full bg-[#F5F7FA] focus:outline-none focus:border-blue-500 text-center"
            />
          </div>
          <img src={navSettingIcon} className="logo hidden lg:block md:block md:w-10 md:h-10" alt="NavSetting logo" />
          <img src={notificationIcon} className="logo hidden lg:block md:block md:w-10 md:h-10" alt="Notification logo" />
          <img src={profileIcon} className="logo rounded-full lg:w-14 lg:h-14 md:w-10 md:h-10 w-8 h-8" alt="Profile logo" />
        </div>
      </nav>
      <nav className="bg-white lg:hidden md:hidden p-5 text-black flex flex-col justify-between items-center border border-gray-200 border-t-0 w-full overflow-x-hidden">
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-xl md:text-xl lg:text-3xl font-semibold text-[#343C6A] text-center flex-grow">{getTitle()}</h2>
          <img src={profileIcon} className="logo rounded-full lg:w-14 lg:h-14 md:w-10 md:h-10 w-8 h-8 ml-auto" alt="Profile logo" />
        </div>
        <div className="relative w-full z-0">
          <img src={searchIcon} className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" alt="Search icon" />
          <input
            type="text"
            placeholder="Search for something"
            className="p-2 w-full md:w-48 lg:w-64 text-sm md:text-base lg:text-l rounded-full bg-[#F5F7FA] focus:outline-none focus:border-blue-500 text-center"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
