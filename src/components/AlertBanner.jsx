import { AlertTriangle, X } from "lucide-react";

export default function AlertBanner({ showBanner, setShowBanner, bannerText, delayMessage, rerouteApplied, handleReroute }) {
  if (!showBanner) return null;
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-[1000] animate-fadeIn">
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3 flex items-center gap-3 backdrop-blur-md shadow-lg">
        <AlertTriangle size={15} className="text-[#F0E100] shrink-0" />
        <span className="flex-1 text-[11px] md:text-xs font-bold text-gray-200 tracking-tight">{bannerText || delayMessage}</span>
        {!rerouteApplied && (
          <button 
            onClick={handleReroute}
            className="bg-[#F0E100] text-[#110c1b] text-[9px] md:text-[10px] font-black px-2.5 py-1.5 rounded-lg hover:opacity-90 shrink-0 cursor-pointer"
          >
            Reroute
          </button>
        )}
        <X size={14} className="text-gray-500 hover:text-white cursor-pointer" onClick={() => setShowBanner(false)} />
      </div>
    </div>
  );
}