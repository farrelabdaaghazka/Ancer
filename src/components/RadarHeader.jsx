export default function RadarHeader({ radarState, setRadarState }) {
  return (
    <div className="flex justify-between items-start mb-4 md:mb-6 shrink-0 z-10">
      <div>
        <div className="text-[#834DFB] text-[10px] md:text-[11px] font-bold tracking-[2px] mb-1 uppercase">Module B</div>
        <h1 className="text-2xl md:text-3xl font-black text-[#F5F3FF] tracking-tight">Live Radar</h1>
      </div>
      <div className="flex gap-1 bg-[#1e1235] border border-white/5 rounded-xl p-1 relative z-30 shadow-md">
        <button 
          onClick={() => setRadarState("search")}
          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[11px] md:text-xs font-bold transition-all cursor-pointer ${radarState === "search" ? "bg-[#834DFB] text-white shadow-sm" : "text-gray-400 hover:text-white"}`}
        >
          Map View
        </button>
        <button 
          onClick={() => setRadarState("active")}
          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[11px] md:text-xs font-bold transition-all cursor-pointer ${radarState === "active" ? "bg-[#834DFB] text-white shadow-sm" : "text-gray-400 hover:text-white"}`}
        >
          Navigation
        </button>
      </div>
    </div>
  );
}