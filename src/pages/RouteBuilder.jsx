import React, { useState } from 'react';

function CreatePlanView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full h-auto pb-10">
      {/* Panel Form Input - Tanpa Scrollbar Paksa */}
      <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 flex flex-col h-auto">
        <div className="space-y-6">
          <div className="space-y-2 text-left">
            <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase">Origin Hub</label>
            <input type="text" defaultValue="Gambir Station" className="w-full bg-[#110c1b] border border-white/5 rounded-xl py-3 px-4 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]" />
          </div>
          <div className="space-y-2 text-left">
            <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase">Destination Point</label>
            <input type="text" defaultValue="Lebak Bulus" className="w-full bg-[#110c1b] border border-white/5 rounded-xl py-3 px-4 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]" />
          </div>
          <div className="space-y-2 text-left">
            <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase">Departure Date</label>
            <input type="text" defaultValue="01/06/2026" className="w-full bg-[#110c1b] border border-white/5 rounded-xl py-3 px-4 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]" />
          </div>
        </div>
        <button className="w-full bg-[#834DFB] hover:bg-purple-600 text-white font-bold py-3.5 rounded-xl text-xs mt-8">Calculate Optimum Routes →</button>
      </div>

      {/* Route Cards - Tanpa Scrollbar */}
      <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 flex flex-col h-auto">
        <div className="bg-[#834DFB]/10 text-[#834DFB] text-[9px] font-black px-3 py-1 rounded-full w-fit uppercase mb-4">⚡ Fastest Route</div>
        <div className="text-4xl font-black text-white">47 min</div>
        <p className="text-[11px] text-gray-500 font-medium mb-6">Estimated travel time</p>
        <div className="space-y-4 border-l border-white/5 ml-2 pl-6">
          <div className="text-sm font-bold text-white">Gambir <span className="text-[10px] text-gray-500 font-medium block">KRL Commuter Line</span></div>
          <div className="text-sm font-bold text-white">Manggarai <span className="text-[10px] text-gray-500 font-medium">MRT Jakarta</span></div>
        </div>
      </div>

      <div className="bg-[#1a1625] border-2 border-yellow-500/20 rounded-2xl p-6 flex flex-col h-auto">
        <div className="bg-yellow-400/10 text-yellow-500 text-[9px] font-black px-3 py-1 rounded-full w-fit uppercase mb-4">💰 Cheapest Route</div>
        <div className="text-4xl font-black text-white">68 min</div>
        <p className="text-[11px] text-gray-500 font-medium mb-6">Estimated travel time</p>
        <div className="space-y-4 border-l border-white/5 ml-2 pl-6">
          <div className="text-sm font-bold text-white">Gambir <span className="text-[10px] text-gray-500 font-medium">TransJakarta 1A</span></div>
          <div className="text-sm font-bold text-white">Harmoni <span className="text-[10px] text-gray-500 font-medium">TransJakarta 8</span></div>
        </div>
        <button className="w-full bg-[#834DFB] text-white font-bold py-3 rounded-xl text-xs mt-6">Save to Travel Calendar</button>
      </div>
    </div>
  );
}

function ScheduleView() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 h-full text-left">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-black text-white">June 2026</h3>
        <button className="bg-[#834DFB] px-4 py-2 rounded-xl text-xs font-bold text-white">+ Create Schedule</button>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map(d => <div key={d} className="text-[10px] font-black text-gray-500 uppercase text-center">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="h-28 bg-[#110c1b] border border-white/5 rounded-xl p-3 text-xs font-bold text-gray-500 hover:border-[#834DFB] transition-all cursor-pointer">
            {i + 1}
            {i === 0 && <div className="mt-2 bg-[#834DFB] text-white p-1.5 rounded-md text-[9px] font-bold">Commute to CBD</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RouteBuilder() {
  const [activeTab, setActiveTab] = useState('create');
  return (
    <div className="flex-1 w-full max-w-[1440px] p-10 flex flex-col h-screen overflow-hidden">
      <div className="mb-6">
        <h1 className="text-3xl font-black text-white">Route Planner Engine</h1>
      </div>
      <div className="flex gap-8 border-b border-white/5 mb-6">
        <button onClick={() => setActiveTab('create')} className={`pb-3 border-b-2 text-xs font-black uppercase ${activeTab === 'create' ? 'border-[#834DFB] text-white' : 'text-gray-500'}`}>Create Plan</button>
        <button onClick={() => setActiveTab('schedule')} className={`pb-3 border-b-2 text-xs font-black uppercase ${activeTab === 'schedule' ? 'border-[#834DFB] text-white' : 'text-gray-500'}`}>My Schedule</button>
      </div>
      <div className="flex-1 overflow-hidden">
        {activeTab === 'create' ? <CreatePlanView /> : <ScheduleView />}
      </div>
    </div>
  );
}