export default function TransitTimeline({ color, data, currentIdx, lastStationIdx }) {
  return (
    <div className="absolute bottom-5 left-4 right-4 md:left-6 md:right-6 bg-[#110c1be6] border border-white/5 rounded-2xl p-4 md:p-5 pb-6 md:pb-7 backdrop-blur-md z-[1000] shadow-xl animate-fadeIn text-left">
      <div style={{ color: `${color}cc` }} className="text-[9px] font-black tracking-widest mb-3 md:b-4 uppercase">{data.lineName}</div>
      
      <div className="w-full overflow-x-auto pb-2 custom-scrollbar">
        <div 
          style={{ width: `${Math.max(100, data.stations.length * 95)}px` }} 
          className="relative flex items-center justify-between px-6 my-3 h-14"
        >
          <div className="absolute h-[2px] left-6 right-6 top-1/2 -translate-y-1/2 bg-white/10 z-0" />
          <div 
            style={{ 
              background: color, 
              width: `calc(${(currentIdx / lastStationIdx) * 100}% - 12px)` 
            }} 
            className="absolute h-[2px] left-6 top-1/2 -translate-y-1/2 z-0 transition-all duration-500" 
          />

          {data.stations.map((st, i) => {
            const isActive = i === currentIdx;
            const isPast = i < currentIdx;
            return (
              <div key={i} className="flex flex-col items-center relative z-10 w-16">
                {isActive ? (
                  <div className="relative flex items-center justify-center">
                    <div style={{ background: `radial-gradient(circle, ${color}55, transparent)` }} className="absolute w-9 h-9 rounded-full" />
                    <div style={{ background: color, borderColor: color }} className="w-3.5 h-3 h-3.5 rounded-full border-4 z-10 shadow-lg" />
                  </div>
                ) : (
                  <div 
                    style={{ borderColor: isPast ? "transparent" : `${color}60`, background: isPast ? "#341F60" : "#110c1b" }} 
                    className={`w-2.5 h-2.5 rounded-full ${isPast ? "" : "border-2"}`}
                  />
                )}
                
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 text-center overflow-visible">
                  <div 
                    style={{ color: isActive ? color : (isPast ? "rgba(245,243,255,0.3)" : "rgba(245,243,255,0.65)") }} 
                    className={`text-[9px] tracking-tight leading-tight whitespace-normal break-words pt-1 ${isActive ? "font-black" : "font-bold"}`}
                  >
                    {st.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}