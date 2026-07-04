import React, { useState, useEffect } from 'react';
// Import semua data awal dari folder data
import { initialTrips } from '../data/tripsData'; 
import { cardOpsData as initialCardOps } from '../data/CardOpsData';
import { chartDistribution as initialChartDist } from '../data/chartData';

import StatsGrid from '../components/StatsGrid';
import TransactionHistory from '../components/TransactionHistory';
import SpendChart from '../components/SpendChart'; 
import TripModal from '../components/TripModal';

export default function MobilityLedger() {
  // --- STATE ---
  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem('ancer_mobility_trips');
    return savedTrips ? JSON.parse(savedTrips) : initialTrips;
  });
  
  const [cardOps, setCardOps] = useState(initialCardOps);
  const [chartDist, setChartDist] = useState(initialChartDist);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efek simpan data lokal
  useEffect(() => {
    localStorage.setItem('ancer_mobility_trips', JSON.stringify(trips));
  }, [trips]);

  // Fungsi tambah trip baru
  const handleAddTrip = (newTrip) => {
    setTrips((prevTrips) => [newTrip, ...prevTrips]);
  };

  // Kalkulasi total pengeluaran dari state trips
  const totalSpending = trips.reduce((sum, trip) => sum + trip.fare, 0);

  return (
    <div className="bg-[#110c1b] text-white font-inter flex min-h-screen">
      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-8">
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

        {/* PROPS: Mengirim totalSpending dan struktur data cardOps */}
        <StatsGrid totalSpending={totalSpending} cardOpsData={cardOps} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          <TransactionHistory trips={trips} />
          
          {/* PROPS: Mengirim array trips dan struktur chartDistribution awal */}
          <SpendChart trips={trips} chartDistribution={chartDist} />
        </div>
      </main>

      {isModalOpen && (
        <TripModal onClose={() => setIsModalOpen(false)} onAddTrip={handleAddTrip} />
      )}
    </div>
  );
}