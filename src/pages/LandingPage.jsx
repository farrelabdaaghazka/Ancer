import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const featureItems = [
    { title: "Route Builder", desc: "Multi-modal travel engine planner", path: "/route-planner" },
    { title: "Live Radar", desc: "Futuristic schematic active navigation", path: "/radar" },
    { title: "Mobility Ledger", desc: "Automated transit expense vault", path: "/ledger" }
  ];

  const coveredNetworks = ["MRT Jakarta", "KRL Commuter Line", "TransJakarta", "JakLingko"];

  return (
    <div className="min-h-screen bg-[#F5F3FF] text-[#18102B] font-sans selection:bg-[#834DFB]/20">
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-[#F5F3FF]/85 backdrop-blur-[20px] border-b border-[#834DFB]/12">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 md:px-12 lg:px-20">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-xl w-9 h-9 bg-[#834DFB] shadow-sm">
              <svg className="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="16" cy="7" r="2"></circle>
                <circle cx="8" cy="17" r="2"></circle>
                <path d="M14 7H10a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H10"></path>
              </svg>
            </div>
            <span className="font-extrabold text-[20px] tracking-[-0.5px]">ANCER</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            <div 
              className="relative" 
              onMouseEnter={() => setActiveDropdown("features")} 
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[15px] font-medium cursor-pointer transition-colors duration-150 ${activeDropdown === 'features' ? 'text-[#834DFB]' : 'text-[#18102B]/60'}`}>
                Features
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'features' ? 'rotate-180 text-[#834DFB]' : 'rotate-0 text-[#18102B]/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              {activeDropdown === "features" && (
                <div className="absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-[16px] shadow-[0_16px_56px_rgba(24,16,43,0.16),0_0_0_1px_rgba(131,77,251,0.08)] z-50 p-4 grid grid-cols-2 gap-3 text-left animate-fadeIn">
                  {featureItems.map((item) => (
                    <Link 
                      key={item.title} 
                      to="/login"
                      className="p-4 rounded-xl border border-[#18102B]/8 bg-[#FAFAFA] hover:border-[#834DFB] hover:bg-[#834DFB]/4 transition-all duration-150 block group"
                    >
                      <div className="text-[#18102B] text-[13px] font-bold mb-1 group-hover:text-[#834DFB] transition-colors">{item.title}</div>
                      <div className="text-[#18102B]/52 text-xs leading-[1.45] mb-2.5">{item.desc}</div>
                      <span className="text-[#834DFB] text-[10px] font-bold tracking-[0.5px] uppercase">[Requires Login]</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="relative" 
              onMouseEnter={() => setActiveDropdown("analytics")} 
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[15px] font-medium cursor-pointer transition-colors duration-150 ${activeDropdown === 'analytics' ? 'text-[#834DFB]' : 'text-[#18102B]/60'}`}>
                Analytics
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'analytics' ? 'rotate-180 text-[#834DFB]' : 'rotate-0 text-[#18102B]/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              {activeDropdown === "analytics" && (
                <div className="absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 w-[440px] bg-white rounded-[24px] shadow-[0_16px_56px_rgba(24,16,43,0.14),0_0_0_1px_rgba(131,77,251,0.08)] z-50 p-6 text-left flex flex-col gap-5 animate-fadeIn">
                  <div>
                    <div className="text-[#834DFB] text-[10px] font-bold tracking-[1.8px] mb-1 uppercase">Transit Intelligence Hub</div>
                    <div className="text-[#18102B] text-base font-black">Civic Data Transparency</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F4F2FF]/50 border border-[#18102B]/4 rounded-[20px] p-[18px_16px] text-center">
                      <div className="text-[#18102B] text-[22px] font-black tracking-[-0.5px]">50K+</div>
                      <div className="text-[#18102B]/42 text-xs font-medium">Active Commuters</div>
                    </div>
                    <div className="bg-[#F4F2FF]/50 border border-[#18102B]/4 rounded-[20px] p-[18px_16px] text-center">
                      <div className="text-[#18102B] text-[22px] font-black tracking-[-0.5px]">120M+</div>
                      <div className="text-[#18102B]/42 text-xs font-medium">Saved Fares</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[#18102B]/40 text-[10px] font-bold uppercase tracking-[0.5px] mb-2.5">Covered Networks</div>
                    <div className="flex flex-wrap gap-2">
                      {coveredNetworks.map(network => (
                        <span key={network} className="bg-[#834DFB]/6 text-[#834DFB] text-xs font-semibold px-3 py-1.5 rounded-xl border border-[#834DFB]/10">
                          {network}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Link to="/login" className="rounded-xl p-[10px_24px] text-sm font-semibold border border-[#18102B]/25 text-[#18102B] bg-transparent cursor-pointer transition-all duration-200 hover:border-[#834DFB] hover:text-[#834DFB]">
            Login
          </Link>
        </div>
      </nav>

      <main className="pt-[140px] pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-[#834DFB]/6 border border-[#834DFB]/15 rounded-full p-[6px_14px] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#834DFB] animate-pulse"></span>
          <span className="text-[#834DFB] text-xs font-bold tracking-[0.2px]">ANCER Live Tracker Engine</span>
        </div>

        <h1 className="text-[32px] sm:text-[42px] md:text-[52px] font-black tracking-[-1.2px] text-[#18102B] leading-[1.12] max-w-4xl mb-6">
          Master Your Urban Commute.<br /> Optimize Every <span className="text-[#834DFB]">Financial Intelligence</span>
        </h1>

        <p className="text-[#18102B]/60 text-lg md:text-xl font-medium max-w-2xl leading-[1.6] mb-10">
          The ultimate civic tech engine bridging physical multi-modal urban mobility with automated expense verification for the modern metropolitan commuter.
        </p>
        
        <Link to="/login" className="inline-flex items-center justify-center bg-[#E9E200] text-[#18102B] rounded-xl p-[14px_32px] text-[15px] font-black shadow-[0_8px_24px_rgba(233,226,0,0.2)] hover:bg-[#dcd500] transition-all duration-200 group">
          Launch Ops Center <span className="ml-1.5 transition-transform duration-150 group-hover:translate-x-0.5">»</span>
        </Link>
      </main> 
    </div>
  );
}