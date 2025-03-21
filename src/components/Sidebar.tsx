import { useState } from "react";
import { Link } from "react-router-dom";
import soarLogo from '../assets/soar-task-log.svg';
import homeIcon from '../assets/homeIcon.svg';
import transferIcon from '../assets/transferIcon.svg';
import accountIcon from '../assets/accountIcon.svg';
import investmentIcon from '../assets/investmentIcon.svg';
import creditcardIcon from '../assets/creditcardIcon.svg';
import loanIcon from '../assets/loanIcon.svg';
import serviceIcon from '../assets/serviceIcon.svg';
import econometricsIcon from '../assets/econometricsIcon.svg';
import settingsIcon from '../assets/settingsIcon.svg';
import hamburgerIcon from '../assets/hamburgerIcon.svg';
import closeIcon from '../assets/hamburgerIcon.svg';

const navLinks = [
  { to: "/dashboard", icon: homeIcon, label: "Dashboard" },
  { to: "/", icon: transferIcon, label: "Transactions" },
  { to: "/", icon: accountIcon, label: "Accounts" },
  { to: "/", icon: investmentIcon, label: "Investments" },
  { to: "/", icon: creditcardIcon, label: "Credit Cards" },
  { to: "/", icon: loanIcon, label: "Loans" },
  { to: "/", icon: serviceIcon, label: "Services" },
  { to: "/", icon: econometricsIcon, label: "My Privileges" },
  { to: "/settings", icon: settingsIcon, label: "Settings" },
];

interface NavLinkProps {
  to: string;
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavLink = ({ to, icon, label, active, onClick }: NavLinkProps) => (
  <Link to={to} onClick={onClick} className={`flex items-center p-2 rounded ${active ? 'text-[#232323]' : 'text-[#B1B1B1]'} hover:bg-gray-700`}>
    <img src={icon} className="logo mr-2 inline" alt={`${label} Icon`} />
    <span className="ml-2 text-xl mt-1">{label}</span>
  </Link>
);

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button className="md:hidden p-4 fixed top-4 left-4" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <img src={hamburgerIcon} alt="Menu" />
      </button>
      <aside className={`w-64 h-screen bg-white text-white p-6 fixed md:relative ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex items-center justify-between p-1.5 mb-3">
            <div className="flex items-center">
                <img src={soarLogo} className="logo mb-5 mr-2" alt="Soar logo" />
                <h2 className="text-2xl font-bold text-[#343C6A] mb-4">Soar Task</h2>
            </div>
            <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
                <img src={closeIcon} alt="Close" />
            </button>
        </div>
        <nav className="flex flex-col space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              {...link}
              active={activeLink === link.to}
              onClick={() => {
                setActiveLink(link.to);
                setIsSidebarOpen(false);
              }}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
