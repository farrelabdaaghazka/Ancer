import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePlanView() {
  const [selectedModes, setSelectedModes] = useState(['MRT', 'KRL', 'TransJakarta']);

  const navigate = useNavigate(); 

  const toggleMode = (mode) => {
    setSelectedModes((prevModes) => {
      if (prevModes.includes(mode)) {
        return prevModes.filter((m) => m !== mode);
      } else {
        return [...prevModes, mode];
      }
    });
  };

  const transitOptions = ['MRT', 'KRL', 'TransJakarta', 'LRT'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full h-auto pb-10">
      {/* Panel Form Input */}
      <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 flex flex-col h-auto">
        <div className="space-y-5 flex-grow">
          {/* Origin Hub */}
          <div className="space-y-2 text-left relative">
            <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase">Origin Hub</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-[#834DFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <input type="text" defaultValue="Gambir Station" className="w-full bg-[#110c1b] border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]" />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-[#1a1625] border border-white/5 rounded-full flex items-center justify-center z-10 cursor-pointer hover:border-[#834DFB] text-gray-400">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
          </div>

          {/* Destination Point */}
          <div className="space-y-2 text-left pt-2">
            <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase">Destination Point</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                </svg>
              </div>
              <input type="text" defaultValue="Lebak Bulus" className="w-full bg-[#110c1b] border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]" />
            </div>
          </div>

          {/* Departure Date */}
          <div className="space-y-2 text-left">
            <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase">Departure Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <input type="text" defaultValue="01/06/2026" className="w-full bg-[#110c1b] border border-white/5 rounded-xl py-3 pl-10 pr-10 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]" />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                 <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
            </div>
          </div>

          {/* Transit Modes Dinamis */}
          <div className="space-y-3 text-left pt-2">
            <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase">Transit Modes</label>
            <div className="flex flex-wrap gap-3">
              {transitOptions.map((mode) => {
                const isSelected = selectedModes.includes(mode);
                
                return (
                  <div 
                    key={mode} 
                    onClick={() => toggleMode(mode)}
                    className={`flex items-center gap-2.5 bg-[#110c1b] rounded-lg px-3.5 py-2.5 cursor-pointer transition-all duration-200 select-none border ${
                      isSelected ? 'border-[#834DFB]' : 'border-transparent'
                    }`}
                  >
                    <div className={`w-[14px] h-[14px] rounded-[3px] flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#834DFB]' : 'bg-white'
                    }`}>
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <span className={`text-[12px] font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-[#6b7280]'
                    }`}>
                      {mode}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className="w-full bg-[#834DFB] hover:bg-purple-600 text-white font-bold py-3.5 rounded-xl text-xs mt-8 transition-colors">
          Calculate Optimum Routes →
        </button>
      </div>

      {/* --- Fastest Route Card --- */}
      <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 flex flex-col h-auto text-left relative">
        <div className="bg-[#834DFB] text-white text-[10px] font-bold px-3 py-1.5 rounded-full w-fit mb-4 flex items-center gap-1">
          ⚡ Fastest Route
        </div>
        <div className="text-[40px] leading-none font-black text-white mb-1">47 min</div>
        <p className="text-[11px] text-gray-500 font-medium mb-8">Estimated travel time</p>
        
        <div className="relative border-l border-white/10 ml-[7px] pl-6 space-y-6 flex-grow">
          <div className="relative">
            <div className="absolute -left-[30.5px] top-1 w-[13px] h-[13px] bg-[#834DFB] rounded-full" />
            <div className="text-[13px] font-bold text-white mb-2 leading-none mt-1">Gambir</div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold text-[#b490f5] bg-[#834DFB]/20 border border-[#834DFB]/20 px-2 py-1 rounded">KRL Commuter Line</span>
              <span className="text-[10px] text-gray-500 flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                12 min
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[30.5px] top-1 w-[13px] h-[13px] bg-[#1a1625] border-2 border-[#834DFB] rounded-full" />
            <div className="text-[13px] font-bold text-white mb-2 leading-none mt-1">Manggarai</div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold text-[#b490f5] bg-[#834DFB]/20 border border-[#834DFB]/20 px-2 py-1 rounded">MRT Jakarta</span>
              <span className="text-[10px] text-gray-500 flex items-center gap-1">
                 <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 18 min
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[30.5px] top-1 w-[13px] h-[13px] bg-[#1a1625] border-2 border-yellow-500 rounded-full" />
            <div className="text-[13px] font-bold text-white mb-2 leading-none mt-1">Blok M</div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded">TransJakarta C1</span>
              <span className="text-[10px] text-gray-500 flex items-center gap-1">
                 <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 17 min
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[30.5px] top-1 w-[13px] h-[13px] bg-yellow-500 rounded-full" />
            <div className="text-[13px] font-bold text-white leading-none mt-1">Lebak Bulus</div>
          </div>
        </div>

        {/* --- Area Footer dengan Penambahan Tombol Live Radar --- */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="mb-4">
            <div className="text-[10px] text-gray-500 font-medium mb-1">Total Fare</div>
            <div className="text-[22px] font-black text-white leading-none">Rp23.500</div>
          </div>
          
          <button className="w-full bg-[#834DFB] hover:bg-purple-600 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            Save to Travel Calendar
          </button>

          {/* Pemisah OR */}
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-white/5"></div>
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">OR</span>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          {/* Tombol Live Radar */}
          <button onClick={() => navigate('/radar')} className="w-full bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors">
            <svg className="w-4 h-4 text-[#834DFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            View on Live Radar
          </button>
        </div>
      </div>

      {/* --- Cheapest Route Card --- */}
      <div className="bg-[#1a1625] border border-yellow-500/50 rounded-2xl p-6 flex flex-col h-auto text-left relative">
        <div className="bg-yellow-400 text-black text-[10px] font-bold px-3 py-1.5 rounded-full w-fit mb-4 flex items-center gap-1">
          💰 Cheapest Route
        </div>
        <div className="text-[40px] leading-none font-black text-white mb-1">68 min</div>
        <p className="text-[11px] text-gray-500 font-medium mb-8">Estimated travel time</p>
        
        <div className="relative border-l border-white/10 ml-[7px] pl-6 space-y-6 flex-grow">
          <div className="relative">
             <div className="absolute -left-[30.5px] top-1 w-[13px] h-[13px] bg-yellow-400 rounded-full" />
             <div className="text-[13px] font-bold text-white mb-2 leading-none mt-1">Gambir</div>
             <div className="flex items-center gap-3">
               <span className="text-[9px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded">TransJakarta 1A</span>
               <span className="text-[10px] text-gray-500 flex items-center gap-1">
                 <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 14 min
               </span>
             </div>
          </div>
          <div className="relative">
             <div className="absolute -left-[30.5px] top-1 w-[13px] h-[13px] bg-[#1a1625] border-2 border-yellow-400 rounded-full" />
             <div className="text-[13px] font-bold text-white mb-2 leading-none mt-1">Harmoni</div>
             <div className="flex items-center gap-3">
               <span className="text-[9px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded">TransJakarta 8</span>
               <span className="text-[10px] text-gray-500 flex items-center gap-1">
                 <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 22 min
               </span>
             </div>
          </div>
          <div className="relative">
             <div className="absolute -left-[30.5px] top-1 w-[13px] h-[13px] bg-[#1a1625] border-2 border-yellow-400 rounded-full" />
             <div className="text-[13px] font-bold text-white mb-2 leading-none mt-1">Grogol</div>
             <div className="flex items-center gap-3">
               <span className="text-[9px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded">TransJakarta 8A</span>
               <span className="text-[10px] text-gray-500 flex items-center gap-1">
                 <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 32 min
               </span>
             </div>
          </div>
          <div className="relative">
             <div className="absolute -left-[30.5px] top-1 w-[13px] h-[13px] bg-yellow-400 rounded-full" />
             <div className="text-[13px] font-bold text-white leading-none mt-1">Lebak Bulus</div>
          </div>
        </div>

        {/* --- Area Footer dengan Penambahan Tombol Live Radar --- */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="mb-4">
            <div className="text-[10px] text-gray-500 font-medium mb-1">Total Fare</div>
            <div className="text-[22px] font-black text-yellow-400 leading-none">Rp9.000</div>
          </div>
          
          <button className="w-full bg-[#834DFB] hover:bg-purple-600 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            Save to Travel Calendar
          </button>

          {/* Pemisah OR */}
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-white/5"></div>
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">OR</span>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          {/* Tombol Live Radar */}
          <button onClick={() => navigate('/radar')} className="w-full bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors">
            <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            View on Live Radar
          </button>
        </div>
      </div>
    </div>
  );
}

function ScheduleView() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 h-auto min-h-full text-left mb-10">
      {/* Header tanpa tombol Create Schedule */}
      <div className="mb-8">
        <h3 className="text-lg font-black text-white">June 2026</h3>
      </div>
      
      {/* Label Hari */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map(d => (
          <div key={d} className="text-[10px] font-black text-gray-500 uppercase text-center">
            {d}
          </div>
        ))}
      </div>
      
      {/* Grid Kalender */}
      <div className="grid grid-cols-7 gap-2">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="h-28 bg-[#110c1b] border border-white/5 rounded-xl p-3 text-xs font-bold text-gray-500 hover:border-[#834DFB] transition-all cursor-pointer">
            {i + 1}
            {i === 0 && (
              <div className="mt-2 bg-[#834DFB] text-white p-1.5 rounded-md text-[9px] font-bold">
                Commute to CBD
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RouteBuilder() {
  const [activeTab, setActiveTab] = useState('create');
  return (
    <div className="flex-1 w-full max-w-[1440px] p-10 flex flex-col h-screen overflow-hidden bg-[#0d0914]">
      <div className="mb-6">
        <h1 className="text-3xl font-black text-white text-left">Route Planner Engine</h1>
      </div>
      <div className="flex gap-8 border-b border-white/5 mb-6">
        <button onClick={() => setActiveTab('create')} className={`pb-3 border-b-2 text-xs font-black uppercase ${activeTab === 'create' ? 'border-[#834DFB] text-white' : 'border-transparent text-gray-500 hover:text-white transition-colors'}`}>Create Plan</button>
        <button onClick={() => setActiveTab('schedule')} className={`pb-3 border-b-2 text-xs font-black uppercase ${activeTab === 'schedule' ? 'border-[#834DFB] text-white' : 'border-transparent text-gray-500 hover:text-white transition-colors'}`}>My Schedule</button>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {activeTab === 'create' ? <CreatePlanView /> : <ScheduleView />}
      </div>
    </div>
  );
}