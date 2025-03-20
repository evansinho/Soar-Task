import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl">Dashboard</h1>
      <div>
        <Link to="/dashboard" className="mx-2">Dashboard</Link>
        <Link to="/settings" className="mx-2">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
