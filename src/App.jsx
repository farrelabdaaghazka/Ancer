import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LiveRadar from "./pages/LiveRadar";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#110c1b] text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 h-screen overflow-hidden flex flex-col relative">
        {children}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/login" element={<Navigate to="/dashboard" replace />} />
        
        <Route 
          path="/dashboard" 
          element={
            <DashboardLayout>
              <div className="flex-1 flex items-center justify-center font-bold text-gray-400">
                Dashboard Overview Module Coming Soon
              </div>
            </DashboardLayout>
          } 
        />
        
        <Route 
          path="/radar" 
          element={
            <DashboardLayout>
              <LiveRadar />
            </DashboardLayout>
          } 
        />
        
        <Route 
          path="/ledger" 
          element={
            <DashboardLayout>
              <div className="flex-1 flex items-center justify-center font-bold text-gray-400">
                Mobility Ledger Financial Vault Coming Soon
              </div>
            </DashboardLayout>
          } 
        />

        <Route 
          path="/profile" 
          element={
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          } 
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}