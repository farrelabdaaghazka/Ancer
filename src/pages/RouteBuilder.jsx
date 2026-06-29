import React, { useState } from 'react';
import { useNavigate } from "react-router";

import TransitModeToggle from '../components/TransitToggle';
import RouteCard from '../components/RouteCard';

function CreatePlanView() {
  const [selectedModes, setSelectedModes] = useState(['MRT', 'KRL', 'TransJakarta']);
  const navigate = useNavigate(); 
  const transitOptions = ['MRT', 'KRL', 'TransJakarta', 'LRT'];

  const toggleMode = (mode) => {
    setSelectedModes((prevModes) => 
      prevModes.includes(mode) ? prevModes.filter((m) => m !== mode) : [...prevModes, mode]
    );
  };

  const fastestRouteData = [
    { station: "Gambir", dotClass: "bg-[#834DFB]", transit: { name: "KRL Commuter Line", badgeClass: "text-[#b490f5] bg-[#834DFB]/20 border border-[#834DFB]/20", duration: "12 min" } },
    { station: "Manggarai", dotClass: "bg-[#1a1625] border-2 border-[#834DFB]", transit: { name: "MRT Jakarta", badgeClass: "text-[#b490f5] bg-[#834DFB]/20 border border-[#834DFB]/20", duration: "18 min" } },
    { station: "Blok M", dotClass: "bg-[#1a1625] border-2 border-yellow-500", transit: { name: "TransJakarta C1", badgeClass: "text-yellow-500 bg-yellow-500/10 border border-yellow-500/20", duration: "17 min" } },
    { station: "Lebak Bulus", dotClass: "bg-yellow-500", transit: null }
  ];

  const cheapestRouteData = [
    { station: "Gambir", dotClass: "bg-yellow-400", transit: { name: "TransJakarta 1A", badgeClass: "text-yellow-500 bg-yellow-500/10 border border-yellow-500/20", duration: "14 min" } },
    { station: "Harmoni", dotClass: "bg-[#1a1625] border-2 border-yellow-400", transit: { name: "TransJakarta 8", badgeClass: "text-yellow-500 bg-yellow-500/10 border border-yellow-500/20", duration: "22 min" } },
    { station: "Grogol", dotClass: "bg-[#1a1625] border-2 border-yellow-400", transit: { name: "TransJakarta 8A", badgeClass: "text-yellow-500 bg-yellow-500/10 border border-yellow-500/20", duration: "32 min" } },
    { station: "Lebak Bulus", dotClass: "bg-yellow-400", transit: null }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full h-auto pb-10">
      
      <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 flex flex-col h-auto">
        <div className="space-y-5 flex-grow">
          
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

          <div className="space-y-3 text-left pt-2">
            <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase">Transit Modes</label>
            <div className="flex flex-wrap gap-3">
              {transitOptions.map((mode) => (
                <TransitModeToggle 
                  key={mode}
                  mode={mode}
                  isSelected={selectedModes.includes(mode)}
                  onClick={() => toggleMode(mode)}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="w-full bg-[#834DFB] hover:bg-purple-600 text-white font-bold py-3.5 rounded-xl text-xs mt-8 transition-colors">
          Calculate Optimum Routes →
        </button>
      </div>

      <RouteCard 
        badgeText="⚡ Fastest Route"
        badgeClass="bg-[#834DFB] text-white"
        cardBorderClass="border-white/5"
        time="47 min"
        fare="Rp23.500"
        fareColorClass="text-white"
        radarIconClass="text-[#834DFB]"
        steps={fastestRouteData}
        onRadarClick={() => navigate('/radar')}
      />

      <RouteCard 
        badgeText="💰 Cheapest Route"
        badgeClass="bg-yellow-400 text-black"
        cardBorderClass="border-yellow-500/50"
        time="68 min"
        fare="Rp9.000"
        fareColorClass="text-yellow-400"
        radarIconClass="text-yellow-500"
        steps={cheapestRouteData}
        onRadarClick={() => navigate('/radar')}
      />
      
    </div>
  );
}

function ScheduleView() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 h-auto min-h-full text-left mb-10">
      <div className="mb-8">
        <h3 className="text-lg font-black text-white">June 2026</h3>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map(d => (
          <div key={d} className="text-[10px] font-black text-gray-500 uppercase text-center">
            {d}
          </div>
        ))}
      </div>
      
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