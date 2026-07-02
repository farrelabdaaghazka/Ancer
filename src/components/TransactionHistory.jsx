import React from 'react';
import { formatRupiah } from '../data/tripsData';

export default function TransactionHistory({ trips }) {
  return (
    <div className="xl:col-span-2 bg-[#1a1625] rounded-3xl border border-white/5 flex flex-col xl:max-h-[580px] p-6 shadow-sm">
      {/* Header Bagian Atas */}
      <div className="flex justify-between items-center border-b border-white/5 pb-4 shrink-0">
        <h2 className="text-xl font-bold text-white">Transaction History</h2>
        <span className="bg-[#9333ea]/20 text-purple-300 px-3 py-1.5 rounded-xl text-xs font-semibold">
          {trips.length} Trips Logged
        </span>
      </div>

      <div className="divide-y divide-white/5 overflow-y-auto custom-scrollbar flex-1 mt-2 pr-1">
        {trips.map((trip, idx) => (
          <div key={idx} className="py-4 flex flex-col sm:flex-row justify-between gap-4 hover:bg-white/[0.01] transition rounded-lg px-2">
            <div className="flex gap-4 items-center">

              <div className="bg-[#9333ea]/15 text-purple-300 rounded-xl p-2.5 min-w-[75px] text-center text-xs font-bold tracking-wide">
                {trip.day}
              </div>

              <div>
                <h3 className="font-semibold text-sm text-white tracking-tight">{trip.route}</h3>
                <p className="text-gray-400 text-xs mt-0.5">{trip.mode}</p>
              </div>
            </div>

            <div className="text-right flex sm:flex-col justify-between sm:justify-center items-center sm:items-end gap-1">
              <p className="text-sm font-bold text-white">{formatRupiah(trip.fare)}</p>
              <p className="text-[10px] text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full font-medium">Logged</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}