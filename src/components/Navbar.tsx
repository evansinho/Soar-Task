import { Link, useLocation } from "react-router-dom";

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
    <nav className="bg-white p-4 text-black flex justify-between">
      <h1 className="text-xl">{getTitle()}</h1>
      <div>
        <Link to="/dashboard" className="mx-2">Dashboard</Link>
        <Link to="/settings" className="mx-2">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
