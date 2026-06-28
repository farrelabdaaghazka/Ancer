import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OpsCenter() {
  const navigate = useNavigate();

  return (
    // Menggunakan overflow-y-auto dan custom-scrollbar agar bisa di-scroll jika kepanjangan
    <div className="flex-1 overflow-y-auto p-8 md:p-12 w-full custom-scrollbar">
      
      <header className="mb-10">
        <h2 className="text-purple-600 font-bold text-xs tracking-[0.2em] uppercase mb-1">ANCER OPS CENTER</h2>
        <h1 className="text-3xl font-bold mb-2">Command Dashboard</h1>
        <p className="text-gray-400 text-sm">Monday, 01 June 2026</p>
      </header>

      {/* Top KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-400 text-sm mb-4">Total Commuter Spending This Month</p>
          <h3 className="text-3xl font-bold text-[#9333ea] mb-2">Rp412.000</h3>
          <p className="text-xs text-red-400 flex items-center gap-1">
            <span>▲</span> 12% vs last month
          </p>
        </div>
        
        <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-400 text-sm mb-4">Remaining Travel Budget</p>
          <h3 className="text-3xl font-bold text-[#facc15] mb-2">Rp1.178.000</h3>
          <p className="text-xs text-gray-500">74% of monthly budget</p>
        </div>

        <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-400 text-sm mb-4">Capital Saved via Integration</p>
          <h3 className="text-3xl font-bold text-[#22c55e] mb-2">Rp45.500</h3>
          <p className="text-xs text-[#22c55e] flex items-center gap-1">
            <span>↑</span> Smart routing savings
          </p>
        </div>
      </div>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Recent Trips */}
        <div className="lg:col-span-2 bg-[#1a1625] border border-white/5 rounded-2xl p-6 flex flex-col shadow-sm h-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Recent Trips</h3>
            <a href="#" className="text-sm text-purple-400 hover:text-purple-300">View all →</a>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-[#110c1b] border border-white/5 flex items-center justify-center text-xl shrink-0">🚇</div>
                <div>
                  <h4 className="font-semibold text-sm">Gambir → Lebak Bulus</h4>
                  <p className="text-xs text-gray-500 mt-1">MRT · Today 08:32</p>
                </div>
              </div>
              <span className="font-bold">Rp14.000</span>
            </div>
            <hr className="border-white/5" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-[#110c1b] border border-white/5 flex items-center justify-center text-xl shrink-0">🚌</div>
                <div>
                  <h4 className="font-semibold text-sm">Lebak Bulus → Harmoni</h4>
                  <p className="text-xs text-gray-500 mt-1">TransJakarta · Today 07:15</p>
                </div>
              </div>
              <span className="font-bold">Rp3.500</span>
            </div>
            <hr className="border-white/5" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-[#110c1b] border border-white/5 flex items-center justify-center text-xl shrink-0">🚆</div>
                <div>
                  <h4 className="font-semibold text-sm">Manggarai → Bogor</h4>
                  <p className="text-xs text-gray-500 mt-1">KRL · Sat 07:42</p>
                </div>
              </div>
              <span className="font-bold">Rp7.000</span>
            </div>
          </div>
        </div>

        {/* Action Cards (Sudah di-link ke halamannya) */}
        <div className="flex flex-col gap-6 h-full">
          <div 
            onClick={() => navigate('/route-builder')}
            className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 flex-1 flex flex-col justify-center cursor-pointer hover:border-purple-500/50 transition shadow-sm"
          >
            <p className="text-xs font-bold text-purple-400 tracking-wider mb-2 uppercase">Route Planner →</p>
            <h3 className="font-bold text-xl mb-1">Plan your next commute</h3>
            <p className="text-sm text-gray-500">Multi-modal optimization with live fare data</p>
          </div>
          
          <div 
            onClick={() => navigate('/radar')}
            className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 flex-1 flex flex-col justify-center cursor-pointer hover:border-yellow-500/50 transition shadow-sm"
          >
            <p className="text-xs font-bold text-[#facc15] tracking-wider mb-2 uppercase">Live Radar →</p>
            <h3 className="font-bold text-xl mb-1">Active transit map</h3>
            <p className="text-sm text-gray-500">Real-time delay tracking and navigation</p>
          </div>
        </div>
      </div>

      {/* Alert Section */}
      <div className="bg-[#1a1625] border border-yellow-600/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-[#facc15] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <p className="text-sm text-gray-300">
            <span className="font-bold text-[#facc15]">Severe Delay Alert:</span> 
            {" "}Red Line backlog due to extreme weather at Tanah Abang. Estimated delay: 22 minutes.
          </p>
        </div>
        <button 
          onClick={() => navigate('/radar')}
          className="bg-[#facc15] hover:bg-yellow-400 text-black font-semibold text-sm px-6 py-2.5 rounded-lg whitespace-nowrap transition"
        >
          Open Live Radar
        </button>
      </div>

    </div>
  );
}