import React from 'react';
import { useNavigate } from "react-router";

// Import komponen yang sudah dipisah
import KpiCard from '../components/CardOps';
import TripItem from '../components/TripItem';
import ActionCard from '../components/ActionCard';
import AlertBanner from '../components/AlertBannerOps';

export default function OpsCenter() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-y-auto p-8 md:p-12 w-full custom-scrollbar">
      
      <header className="mb-10">
        <h2 className="text-purple-600 font-bold text-xs tracking-[0.2em] uppercase mb-1">ANCER OPS CENTER</h2>
        <h1 className="text-3xl font-bold mb-2">Command Dashboard</h1>
        <p className="text-gray-400 text-sm">Monday, 01 June 2026</p>
      </header>

      {/* Top KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard 
          title="Total Commuter Spending This Month"
          amount="Rp412.000"
          amountColorClass="text-[#9333ea]"
          trendIcon="▲"
          trendText="12% vs last month"
          trendColorClass="text-red-400"
        />
        <KpiCard 
          title="Remaining Travel Budget"
          amount="Rp1.178.000"
          amountColorClass="text-[#facc15]"
          trendText="74% of monthly budget"
          trendColorClass="text-gray-500"
        />
        <KpiCard 
          title="Capital Saved via Integration"
          amount="Rp45.500"
          amountColorClass="text-[#22c55e]"
          trendIcon="↑"
          trendText="Smart routing savings"
          trendColorClass="text-[#22c55e]"
        />
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
            <TripItem 
              icon="🚇"
              route="Gambir → Lebak Bulus"
              details="MRT · Today 08:32"
              price="Rp14.000"
            />
            <TripItem 
              icon="🚌"
              route="Lebak Bulus → Harmoni"
              details="TransJakarta · Today 07:15"
              price="Rp3.500"
            />
            <TripItem 
              icon="🚆"
              route="Manggarai → Bogor"
              details="KRL · Sat 07:42"
              price="Rp7.000"
              showDivider={false} // Divider tidak perlu di item terakhir
            />
          </div>
        </div>

        {/* Action Cards */}
        <div className="flex flex-col gap-6 h-full">
          <ActionCard 
            label="Route Planner"
            labelColorClass="text-purple-400"
            title="Plan your next commute"
            description="Multi-modal optimization with live fare data"
            hoverClass="hover:border-purple-500/50"
            onClick={() => navigate('/route-builder')}
          />
          <ActionCard 
            label="Live Radar"
            labelColorClass="text-[#facc15]"
            title="Active transit map"
            description="Real-time delay tracking and navigation"
            hoverClass="hover:border-yellow-500/50"
            onClick={() => navigate('/radar')}
          />
        </div>
      </div>

      {/* Alert Section */}
      <AlertBanner 
        type="Severe Delay Alert"
        message="Red Line backlog due to extreme weather at Tanah Abang. Estimated delay: 22 minutes."
        buttonText="Open Live Radar"
        onButtonClick={() => navigate('/radar')}
      />

    </div>
  );
}