import React, { useState, useEffect } from 'react';
import { initialTrips } from '../data/tripsData'; 
import StatsGrid from '../components/StatsGrid';
import TransactionHistory from '../components/TransactionHistory';
import TripModal from '../components/TripModal';

export default function MobilityLedger() {
  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem('ancer_mobility_trips');
    return savedTrips ? JSON.parse(savedTrips) : initialTrips;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('ancer_mobility_trips', JSON.stringify(trips));
  }, [trips]);

  const handleAddTrip = (newTrip) => {
    setTrips((prevTrips) => [newTrip, ...prevTrips]);
  };

  const totalSpending = trips.reduce((sum, trip) => sum + trip.fare, 0);

  return (
    <div className="bg-[#110c1b] text-white font-inter flex min-h-screen">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(147, 51, 234, 0.05); border-radius: 9999px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #4a3773; border-radius: 9999px; transition: background 0.2s ease; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #7c4dff; }
      `}</style>

      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8 custom-scrollbar">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <p className="text-[#9333ea] uppercase tracking-[4px] text-xs font-semibold">Module C</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-1">Mobility Ledger</h1>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-[#facc15] text-black px-5 py-3 rounded-xl text-sm font-bold shadow-lg hover:scale-105 hover:bg-[#eab308] transition shrink-0"
          >
            + Log Trip
          </button>
        </div>

        <StatsGrid totalSpending={totalSpending} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          <TransactionHistory trips={trips} />
          <div className="bg-[#1a1625] rounded-3xl border border-white/5 p-6 flex flex-col justify-center items-center text-center min-h-[300px] xl:h-full">
            <p className="text-gray-400 text-sm">Visual Chart Distribution</p>
            <p className="text-xs text-purple-400 mt-1">Ready to integrate with Chart component</p>
          </div>
        </div>
      </main>

      {isModalOpen && (
        <TripModal 
          onClose={() => setIsModalOpen(false)} 
          onAddTrip={handleAddTrip} 
        />
      )}
    </div>
  );
}