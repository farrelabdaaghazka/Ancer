import React from 'react';

export default function TripModal({ onClose, onAddTrip }) {
  
  const handleConfirm = () => {
    const mockNewTrip = {
      day: 'Mon 08', 
      route: 'Blok M → Bundaran HI',
      mode: 'MRT + TJ Integration',
      fare: 9000 
    };
    
    onAddTrip(mockNewTrip);
    onClose();
  };

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
          <button onClick={handleConfirm} className="bg-[#facc15] hover:bg-[#eab308] text-black py-4 rounded-[16px] font-black text-[14px] shadow-[0_4px_20px_rgba(250,204,21,0.2)] transition flex items-center justify-center gap-1">
            Confirm Log ✓
          </button>
        </div>
      </div>
    </div>
  );
}