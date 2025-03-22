import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
