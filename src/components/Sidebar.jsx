import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  Menu, 
  ChevronLeft, 
  LayoutDashboard, 
  Map, 
  Radar, 
  Wallet, 
  User, 
  LogOut 
} from "lucide-react";

import ancerLogo from "../assets/logo/ancer logo.png";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Ops Center", icon: LayoutDashboard },
    { path: "/route-builder", label: "Route Builder", icon: Map },
    { path: "/radar", label: "Live Radar", icon: Radar },
    { path: "/ledger", label: "Mobility Ledger", icon: Wallet },
  ];

  return (
    <aside 
      className={`h-screen sticky top-0 bg-[#1a1625] border-r border-r-white/5 flex flex-col py-6 shrink-0 z-50 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className={`flex items-center gap-3 px-4 mb-10 relative ${isCollapsed ? "justify-center" : "justify-between"}`}>
        <div className="flex items-center gap-3 overflow-hidden select-none">
          <img src={ancerLogo} alt="ANCER Logo" className="w-9 h-9 object-contain shrink-0" />
          {!isCollapsed && (
            <span className="font-black text-xl tracking-tight text-white whitespace-nowrap">
              ANCER
            </span>
          )}
        </div>
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`w-7 h-7 rounded-lg border border-white/10 bg-[#110c1b] text-gray-400 hover:text-white flex items-center justify-center cursor-pointer transition-all ${
            isCollapsed ? "absolute -right-3.5 top-1/2 -translate-y-1/2 shadow-md" : ""
          }`}
        >
          {isCollapsed ? <Menu size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      <nav className="flex flex-col gap-2 px-3 flex-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-sm transition-all relative group cursor-pointer ${
                isActive 
                  ? "bg-[#834DFB] text-white shadow-[0_4px_12px_rgba(131,77,251,0.25)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={18} className="shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap">{item.label}</span>}
              {isCollapsed && (
                <div className="absolute left-16 bg-[#110c1b] text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity border border-white/5 whitespace-nowrap z-50 shadow-xl">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 flex flex-col gap-1 border-t border-white/5 pt-4">
        <Link
          to="/profile"
          className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-sm transition-all relative group cursor-pointer ${
            location.pathname === "/profile" ? "bg-[#834DFB] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <User size={18} className="shrink-0" />
          {!isCollapsed && <span className="whitespace-nowrap">My Profile</span>}
          {isCollapsed && (
            <div className="absolute left-16 bg-[#110c1b] text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity border border-white/5 whitespace-nowrap z-50 shadow-xl">
              My Profile
            </div>
          )}
        </Link>

        <Link
          to="/"
          className="flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-sm text-red-400 hover:bg-red-500/10 transition-all relative group cursor-pointer"
        >
          <LogOut size={18} className="shrink-0" />
          {!isCollapsed && <span className="whitespace-nowrap">Sign Out</span>}
          {isCollapsed && (
            <div className="absolute left-16 bg-[#110c1b] text-red-400 text-xs font-bold px-3 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity border border-red-500/10 whitespace-nowrap z-50 shadow-xl">
              Sign Out
            </div>
          )}
        </Link>
      </div>
    </aside>
  );
}