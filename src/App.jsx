import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthGate from "./pages/AuthGate";
import OpsCenter from "./pages/OpsCenter";
import RouteBuilder from "./pages/RouteBuilder";
import LiveRadar from "./pages/LiveRadar";
import MobilityLedger from "./pages/MobilityLedger";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthGate />} />
        <Route path="/dashboard" element={<OpsCenter />} />
        <Route path="/route-planner" element={<RouteBuilder />} />
        <Route path="/radar" element={<LiveRadar />} />
        <Route path="/ledger" element={<MobilityLedger />} />
      </Routes>
    </Router>
  );
}