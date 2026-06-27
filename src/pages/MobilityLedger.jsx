import React, { useState, useEffect } from 'react';

export default function MobilityLedger() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="bg-[#110c1b] text-white font-inter flex min-h-screen">
      <style>{`
        @keyframes pieIntro {
          0% { transform: scale(0.85) rotate(-90deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(147, 51, 234, 0.05);
          border-radius: 9999px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4a3773;
          border-radius: 9999px;
          transition: background 0.2s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7c4dff;
        }
      `}</style>

      {/* MAIN CONTENT */}
      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <p className="text-[#9333ea] uppercase tracking-[4px] text-sm font-semibold">Module C</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">Mobility Ledger</h1>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-[#facc15] text-black px-6 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
          >
            + Log Trip
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1a1625] rounded-3xl p-8 border border-white/5">
            <p className="text-gray-400">Total Commuter Spending This Month</p>
            <h2 className="text-4xl font-bold mt-6">Rp412.000</h2>
            <p className="text-red-400 mt-4">▲ 12% vs last month</p>
          </div>

          <div className="bg-[#1a1625] rounded-3xl p-8 border border-white/5">
            <p className="text-gray-400">Remaining Travel Budget</p>
            <h2 className="text-4xl font-bold mt-6">Rp1.178.000</h2>
            <div className="mt-4">
              <p className="text-sm text-gray-400">74% remaining</p>
              <div className="h-2 bg-[#110c1b] rounded-full mt-3">
                <div className="h-2 w-3/4 bg-[#9333ea] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1625] rounded-3xl p-8 border border-white/5">
            <p className="text-gray-400">Capital Saved via Integration</p>
            <h2 className="text-4xl font-bold mt-6">Rp45.500</h2>
            <p className="text-[#22c55e] mt-4">↗ Smart routing savings</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* TRANSACTION HISTORY */}
          <div className="xl:col-span-2 bg-[#1a1625] rounded-3xl border border-white/5 flex flex-col xl:max-h-[580px]">
            <div className="p-6 flex justify-between items-center border-b border-white/5 shrink-0">
              <h2 className="text-2xl font-bold">Transaction History</h2>
              <span className="bg-[#9333ea]/20 text-purple-300 px-4 py-2 rounded-xl text-sm font-medium">7 Trips Logged</span>
            </div>

            <div className="divide-y divide-white/5 overflow-y-auto custom-scrollbar flex-1">
              {[
                { day: 'Mon 01', route: 'Gambir → Lebak Bulus', mode: 'MRT', fare: 'Rp14.000' },
                { day: 'Tue 02', route: 'Lebak Bulus → Dukuh Atas', mode: 'MRT', fare: 'Rp14.000' },
                { day: 'Wed 03', route: 'Manggarai → Bogor', mode: 'KRL', fare: 'Rp7.000' },
                { day: 'Thu 04', route: 'Kampung Rambutan → Cawang', mode: 'TransJakarta', fare: 'Rp3.500' },
                { day: 'Fri 05', route: 'Cawang → Harmoni', mode: 'TransJakarta', fare: 'Rp3.500' },
                { day: 'Sat 06', route: 'Tanah Abang → Sudirman', mode: 'KRL', fare: 'Rp5.000' },
                { day: 'Sun 07', route: 'Dukuh Atas → Blok M', mode: 'MRT', fare: 'Rp14.000' },
              ].map((trip, idx) => (
                <div key={idx} className="p-6 flex flex-col md:flex-row justify-between gap-4 hover:bg-white/[0.01] transition">
                  <div className="flex gap-4">
                    <div className="bg-[#9333ea]/20 text-purple-300 rounded-2xl p-4 min-w-[90px] text-center font-medium alignment-fix">{trip.day}</div>
                    <div>
                      <h3 className="font-semibold text-xl">{trip.route}</h3>
                      <p className="text-gray-400">{trip.mode}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{trip.fare}</p>
                    <p className="text-[#22c55e]">Logged</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DONUT CHART */}
          <div className="bg-[#1a1625] rounded-3xl p-6 border border-white/5 flex flex-col justify-between min-h-[540px] xl:max-h-[580px]">
            <div>
              <h2 className="text-2xl font-bold">Spend by Mode</h2>
              <p className="text-gray-400 mt-1 mb-6">June 2026 Distribution</p>

              <div className="w-48 h-48 mx-auto relative mb-8 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" fill="transparent" stroke="#1c162a" strokeWidth="16" />
                  
                  {/* Segment 1: MRT Jakarta (45%) */}
                  <circle
                    cx="50" cy="50" r="38" fill="transparent" stroke="#7c4dff" strokeWidth="16"
                    className="transition-all duration-1000 ease-out"
                    strokeDasharray={isLoaded ? "107.4 238.8" : "0 238.8"} 
                    strokeDashoffset="0"
                  />

                  {/* Segment 2: KRL Commuter (24%) */}
                  <circle
                    cx="50" cy="50" r="38" fill="transparent" stroke="#22c55e" strokeWidth="16"
                    className="transition-all duration-1000 ease-out"
                    strokeDasharray={isLoaded ? "57.3 238.8" : "0 238.8"}
                    strokeDashoffset={isLoaded ? "-107.4" : "0"}
                  />

                  {/* Segment 3: TransJakarta (19%) */}
                  <circle
                    cx="50" cy="50" r="38" fill="transparent" stroke="#facc15" strokeWidth="16"
                    className="transition-all duration-1000 ease-out"
                    strokeDasharray={isLoaded ? "45.4 238.8" : "0 238.8"}
                    strokeDashoffset={isLoaded ? "-164.7" : "0"}
                  />

                  {/* Segment 4: JakLingko (12%) */}
                  <circle
                    cx="50" cy="50" r="38" fill="transparent" stroke="#4a3773" strokeWidth="16"
                    className="transition-all duration-1000 ease-out"
                    strokeDasharray={isLoaded ? "28.7 238.8" : "0 238.8"}
                    strokeDashoffset={isLoaded ? "-210.1" : "0"}
                  />
                </svg>
                <div className="absolute w-[52%] h-[52%] bg-[#1a1625] rounded-full"></div>
              </div>

              <div className="space-y-3 text-sm font-medium text-gray-400">
                {[
                  { name: "MRT Jakarta", percentage: "45%", color: "bg-[#7c4dff]" },
                  { name: "KRL Commuter", percentage: "24%", color: "bg-[#22c55e]" },
                  { name: "TransJakarta", percentage: "19%", color: "bg-[#facc15]" },
                  { name: "JakLingko", percentage: "12%", color: "bg-[#4a3773]" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <div className="flex items-center gap-3 w-1/2">
                      <span className={`w-3 h-3 rounded-md ${item.color}`}></span>
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <div className="flex items-center justify-end gap-3 w-1/2">
                      <span className="font-bold text-white">{item.percentage}</span>
                      <div className="w-20 bg-[#2d2244] h-1 rounded-full overflow-hidden">
                        <div
                          className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isLoaded ? item.percentage : "0%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.03] flex justify-between items-center text-xs shrink-0">
              <span className="text-gray-400">Monthly Total</span>
              <span className="font-bold text-[#7c4dff] text-sm">Rp412.000</span>
            </div>
          </div>

        </div>
      </main>

      {/* TRIP MODAL COMPONENT */}
      {isModalOpen && <TripModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

function TripModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-[#070412]/85 backdrop-blur-md z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#120d24] border-2 border-[#4c249f]/60 shadow-[0_0_50px_rgba(139,92,246,0.2)] w-full max-w-[520px] rounded-[32px] p-7 md:p-9 relative my-auto">
        
        <button onClick={onClose} className="absolute top-7 right-7 w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.08] transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="text-center mt-2">
          <div className="text-5xl mb-5">🚀</div>
          <h2 className="text-[32px] font-extrabold text-white tracking-tight leading-none">Trip Completed!</h2>
          <p className="text-[#7e7694] text-[14px] mt-3 font-medium">Confirm your transit expense to log it to the ledger</p>
        </div>

        <div className="bg-[#1b1437] border border-[#2e225c] rounded-[24px] py-7 px-6 my-7 text-center">
          <p className="text-[11px] uppercase tracking-[2px] font-bold text-[#8b7cb6]">Total Fare Calculated</p>
          <p className="text-[56px] font-black text-white mt-2 tracking-tight leading-none">Rp9.000</p>
        </div>

        <div className="space-y-4 px-1">
          <h4 className="text-[11px] uppercase tracking-[1.5px] font-bold text-[#564f6e] mb-2">Fare Breakdown</h4>
          
          <div className="flex justify-between items-center text-[15px]">
            <span className="text-[#a299bd]">MRT Jakarta <span className="text-[#564f6e] text-[13px] font-normal">(Blok M → Bundaran HI)</span></span>
            <span className="font-bold text-white">Rp14.000</span>
          </div>
          
          <div className="flex justify-between items-center text-[15px]">
            <span className="text-[#a299bd]">TransJakarta C1 <span className="text-[#564f6e] text-[13px] font-normal">(Blok M terminal)</span></span>
            <span className="font-bold text-white">Rp3.500</span>
          </div>
          
          <div className="flex justify-between items-center text-[15px]">
            <span className="text-[#10b981]">KRL Integration Discount</span>
            <span className="font-bold text-[#10b981]">-Rp5.000</span>
          </div>
          
          <div className="flex justify-between items-center text-[15px]">
            <span className="text-[#10b981]">Multi-modal Fare Cap Savings</span>
            <span className="font-bold text-[#10b981]">-Rp3.500</span>
          </div>

          <div className="border-t border-white/[0.08] my-6 pt-5 flex justify-between items-center">
            <span className="text-[16px] font-bold text-white">Net Total</span>
            <span className="text-[22px] font-black text-[#facc15] tracking-wide">Rp9.000</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <button onClick={onClose} className="border-2 border-[#2e225c] hover:bg-white/[0.02] text-[#a299bd] py-4 rounded-[16px] font-bold text-[14px] transition">
            Edit Expense
          </button>
          <button onClick={onClose} className="bg-[#facc15] hover:bg-[#eab308] text-black py-4 rounded-[16px] font-black text-[14px] shadow-[0_4px_20px_rgba(250,204,21,0.2)] transition flex items-center justify-center gap-1">
            Confirm Log ✓
          </button>
        </div>
      </div>
    </div>
  );
}