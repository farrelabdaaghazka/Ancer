import React, { useState } from 'react';

export default function TripModal({ onClose, onAddTrip }) {
  const [isManual, setIsManual] = useState(false);
  const [route, setRoute] = useState('');
  const [mode, setMode] = useState('MRT');
  const [fare, setFare] = useState('');

  const [inputDate, setInputDate] = useState(new Date().toISOString().split('T')[0]);

  const handleConfirm = () => {
    
    const formatSelectedDate = (dateString) => {
      const dateObj = new Date(dateString);
      return dateObj.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit' });
    };

    if (isManual) {
      if (!route || !fare || !inputDate) {
        alert("Silakan isi semua kolom data terlebih dahulu!");
        return;
      }
      
      onAddTrip({
        day: formatSelectedDate(inputDate), // Menghasilkan format string seperti "Mon 08" secara dinamis
        route: route,
        mode: mode,
        fare: Number(fare)
      });
    } else {
      
      const todayFormatted = new Date().toLocaleDateString('en-US', { weekday: 'short', day: '2-digit' });
      onAddTrip({
        day: todayFormatted, 
        route: 'Blok M → Bundaran HI',
        mode: 'MRT + TJ Integration',
        fare: 9000 
      });
    }
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-[#070412]/85 backdrop-blur-md z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#120d24] border-2 border-[#4c249f]/60 shadow-[0_0_50px_rgba(139,92,246,0.2)] w-full max-w-[520px] rounded-[32px] p-7 md:p-9 relative my-auto text-white">
        
        <button onClick={onClose} className="absolute top-7 right-7 w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.08] transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="text-center mt-2">
          <div className="text-5xl mb-5">{isManual ? "📝" : "🚀"}</div>
          <h2 className="text-2xl font-extrabold tracking-tight leading-none">
            {isManual ? "Log Manual" : "Trip Completed!"}
          </h2>
          <p className="text-[#7e7694] text-[13px] mt-2 font-medium">
            {isManual ? "Masukkan detail pengeluaran transit secara manual" : "Confirm your transit expense to log it to the ledger"}
          </p>
        </div>

        {isManual ? (
          <div className="my-6 space-y-4 text-left">

            <div>
              <label className="text-[11px] uppercase tracking-wider font-bold text-purple-400 block mb-1">Tanggal Perjalanan</label>
              <input 
                type="date" 
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
                className="w-full bg-[#1b1437] border border-[#2e225c] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 text-white"
                style={{ colorScheme: 'dark' }} // Menjaga dropdown kalender bawaan browser tetap bertema dark mode
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider font-bold text-purple-400 block mb-1">Rute Perjalanan</label>
              <input 
                type="text" 
                placeholder="Contoh: Sudirman → Kuningan" 
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                className="w-full bg-[#1b1437] border border-[#2e225c] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-bold text-purple-400 block mb-1">Moda Transit</label>
                <select 
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  className="w-full bg-[#1b1437] border border-[#2e225c] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 text-white appearance-none"
                >
                  <option value="MRT">MRT</option>
                  <option value="KRL">KRL</option>
                  <option value="TransJakarta">TransJakarta</option>
                  <option value="JakLingko">JakLingko</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-wider font-bold text-purple-400 block mb-1">Tarif (Rp)</label>
                <input 
                  type="number" 
                  placeholder="9000" 
                  value={fare}
                  onChange={(e) => setFare(e.target.value)}
                  className="w-full bg-[#1b1437] border border-[#2e225c] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 text-white"
                />
              </div>
            </div>
          </div>
        ) : (

          <>
            <div className="bg-[#1b1437] border border-[#2e225c] rounded-[24px] py-6 px-6 my-6 text-center">
              <p className="text-[11px] uppercase tracking-[2px] font-bold text-[#8b7cb6]">Total Fare Calculated</p>
              <p className="text-4xl font-black mt-2 tracking-tight leading-none text-[#facc15]">Rp9.000</p>
            </div>

            <div className="space-y-3 px-1 text-xs">
              <h4 className="text-[11px] uppercase tracking-[1.5px] font-bold text-[#564f6e] mb-2">Fare Breakdown</h4>
              <div className="flex justify-between items-center">
                <span className="text-[#a299bd]">MRT Jakarta <span className="text-[#564f6e] text-[11px] font-normal">(Blok M → Bundaran HI)</span></span>
                <span className="font-bold">Rp14.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#a299bd]">TransJakarta C1 <span className="text-[#564f6e] text-[11px] font-normal">(Blok M terminal)</span></span>
                <span className="font-bold">Rp3.500</span>
              </div>
              <div className="flex justify-between items-center text-[#10b981]">
                <span>KRL Integration Discount</span>
                <span className="font-bold">-Rp5.000</span>
              </div>
              <div className="flex justify-between items-center text-[#10b981]">
                <span>Multi-modal Fare Cap Savings</span>
                <span className="font-bold">-Rp3.500</span>
              </div>
              <div className="border-t border-white/[0.08] my-4 pt-4 flex justify-between items-center text-sm">
                <span className="font-bold">Net Total</span>
                <span className="text-lg font-black text-[#facc15] tracking-wide">Rp9.000</span>
              </div>
            </div>
          </>
        )}

          <div className="grid grid-cols-2 gap-4 mt-8">
          <button 
            onClick={() => setIsManual(!isManual)} 
            className="border-2 border-[#2e225c] hover:bg-white/[0.02] text-[#a299bd] py-3.5 rounded-[16px] font-bold text-[13px] transition"
          >
            {isManual ? "← Kembali" : "Manual Input"}
          </button>
          <button 
            onClick={handleConfirm} 
            className="bg-[#facc15] hover:bg-[#eab308] text-black py-3.5 rounded-[16px] font-black text-[13px] shadow-[0_4px_20px_rgba(250,204,21,0.2)] transition flex items-center justify-center gap-1"
          >
            {isManual ? "Save Log ✓" : "Confirm Log ✓"}
          </button>
        </div>

      </div>
    </div>
  );
}