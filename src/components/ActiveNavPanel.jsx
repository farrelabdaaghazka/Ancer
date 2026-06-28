import { Eye } from "lucide-react";

export default function ActiveNavPanel({ 
  color, displayActiveStation, setRadarState, displayNextStation, 
  data, isAtTerminus, displayRemaining, scenario, badgeColor, badgeLabel 
}) {
  return (
    <div className="w-full md:w-[320px] lg:w-[350px] bg-[#1a1625] border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between p-5 md:p-6 shrink-0 z-20 animate-fadeIn overflow-y-auto max-h-[300px] md:max-h-full">
      <div className="space-y-4 md:space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <div style={{ color: color }} className="text-[9px] font-extrabold tracking-wider mb-1">CHECKPOINT STATUS</div>
            <div className="text-xs text-gray-400 mb-0.5">Active Hub</div>
            <div className="text-lg md:text-xl font-black text-white tracking-tight leading-tight">{displayActiveStation}</div>
          </div>
          <button 
            onClick={() => setRadarState("search")}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <Eye size={14} />
          </button>
        </div>

        <div className="space-y-3 border-y border-white/5 py-4 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Next Stop</span>
            <span className="font-bold text-white max-w-[120px] md:max-w-[150px] truncate text-right">{displayNextStation}</span>
            <span style={{ color: color }} className="font-extrabold">{isAtTerminus ? "" : data.etaNext}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Final Destination</span>
            <span className="font-bold text-white max-w-[120px] md:max-w-[150px] truncate text-right">{data.destination}</span>
            <span style={{ color: color }} className="font-extrabold">{isAtTerminus ? "Arrived" : data.etaDest}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Remaining Tracker</span>
            <span className="font-bold text-white">{displayRemaining}</span>
          </div>
        </div>

        <div className="bg-[#110c1b]/60 border border-white/5 rounded-2xl p-4 space-y-3 animate-fadeIn hidden md:block">
          <div className="text-[9px] font-black text-gray-500 tracking-wider uppercase">Live Fleet Intelligence</div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Armada ID</span>
            <span className="font-bold text-gray-200 uppercase tracking-wide">{scenario}-742</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Velocity</span>
            <span className="font-extrabold text-[#22c55e]">{isAtTerminus ? "0 km/h" : "68 km/h"}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Gerbong Density</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#834DFB]/10 text-[#834DFB] border border-[#834DFB]/20">MODERATE</span>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/5 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-gray-400 mb-0.5">Integrated Fare</div>
          <div className="text-lg md:text-xl font-black text-[#F0E100]">{data.fareValue}</div>
        </div>
        <div 
          style={{ color: badgeColor, borderColor: `${badgeColor}30`, background: `${badgeColor}12` }}
          className="rounded-lg px-3 py-1 text-[10px] font-black border tracking-wide"
        >
          {badgeLabel}
        </div>
      </div>
    </div>
  );
}