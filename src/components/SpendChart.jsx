import React, { useState, useEffect } from 'react';
import { formatRupiah } from '../data/tripsData';

export default function SpendChart({ trips = [], chartDistribution = [] }) {
  const totalCircumference = 238.8; // Keliling lingkaran r=38
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // 1. Hitung total nominal pengeluaran riil
  const totalSpending = trips.reduce((sum, trip) => sum + trip.fare, 0);

  // 2. Akumulasi data nominal real-time per jenis moda
  const fareRecords = { "MRT": 0, "KRL": 0, "TransJakarta": 0, "JakLingko": 0 };
  
  trips.forEach(trip => {
    let modeKey = "JakLingko";
    const currentMode = trip.mode || "";

    if (currentMode.includes("MRT")) modeKey = "MRT";
    else if (currentMode.includes("KRL")) modeKey = "KRL";
    else if (currentMode.includes("TransJakarta")) modeKey = "TransJakarta";

    fareRecords[modeKey] += trip.fare;
  });

  // 3. Hitung persentase dinamis
  const liveChartDistribution = chartDistribution.map(item => {
    let searchKey = "JakLingko";
    if (item.name.includes("MRT")) searchKey = "MRT";
    if (item.name.includes("KRL")) searchKey = "KRL";
    if (item.name.includes("TransJakarta")) searchKey = "TransJakarta";

    const currentFare = fareRecords[searchKey] || 0;
    const calcPercent = totalSpending > 0 ? Math.round((currentFare / totalSpending) * 100) : 0;

    return {
      ...item,
      amount: currentFare,
      percentage: `${calcPercent}%`,
      rawPercent: calcPercent
    };
  });

  const activeSegments = liveChartDistribution.filter(item => item.rawPercent > 0);

  let accumulatedAngle = 0;
  let accumulatedDelay = 0;
  
  const colorMap = {
    "bg-[#7c4dff]": "#7c4dff",
    "bg-[#22c55e]": "#22c55e",
    "bg-[#facc15]": "#facc15",
    "bg-[#4a3773]": "#4a3773"
  };

  return (
    <>
      <style>{`
        @keyframes pieIntro {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-pie-intro {
          animation: pieIntro 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          transform-origin: center;
        }

        /* Style custom scrollbar untuk area legenda di bawah */
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(147, 51, 234, 0.02);
          border-radius: 9999px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b2a5c;
          border-radius: 9999px;
          transition: background 0.2s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7c4dff;
        }
      `}</style>

      <div className="bg-[#1a1625] rounded-3xl p-6 border border-white/5 flex flex-col justify-between min-h-[540px] xl:max-h-[580px] xl:h-full">
        {/* Konten utama dibungkus flex-col dengan overflow tersembunyi agar struktur tinggi card tetap stabil */}
        <div className="flex flex-col overflow-hidden flex-1">
          <h2 className="text-2xl font-bold">Spend by Mode</h2>
          <p className="text-gray-400 mt-1 mb-5">June 2026 Distribution</p>

          {/* AREA CHART LINGKARAN */}
          <div className="w-48 h-48 mx-auto relative mb-6 flex items-center justify-center shrink-0">
            <svg className="w-full h-full animate-pie-intro" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" fill="transparent" stroke="#1a1625" strokeWidth="16" />
              
              {totalSpending > 0 && activeSegments.map((item, idx) => {
                const val = item.rawPercent;
                
                // Tambahan 0.8 unit agar ujung lingkaran berhimpitan sempurna tanpa celah mengintip
                const strokeLength = (val / 100) * totalCircumference + 0.8;
                
                const currentRotation = -90 + accumulatedAngle;
                accumulatedAngle += (val / 100) * 360;

                // Kecepatan putaran tinggi (~300ms untuk satu lingkaran penuh)
                const currentDuration = (val / 100) * 300;
                const currentDelay = accumulatedDelay;
                accumulatedDelay += currentDuration;

                const isHovered = hoveredIndex === idx;

                return (
                  <circle
                    key={idx}
                    cx="50"
                    cy="50"
                    r="38"
                    fill="transparent"
                    stroke={colorMap[item.color] || '#7c4dff'}
                    strokeWidth={isHovered ? "20" : "16"}
                    className="cursor-pointer"
                    style={{
                      transformOrigin: '50px 50px',
                      transform: `rotate(${currentRotation}deg)`,
                      transition: `stroke-dashoffset ${currentDuration}ms cubic-bezier(0.25, 1, 0.5, 1), stroke-width 0.2s ease`,
                      transitionDelay: isLoaded && hoveredIndex === null ? `${currentDelay}ms` : '0ms',
                    }}
                    strokeDasharray={`${strokeLength} ${totalCircumference}`}
                    strokeDashoffset={isLoaded ? 0 : strokeLength}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                );
              })}
            </svg>
            
            <div className="absolute w-[52%] h-[52%] bg-[#1a1625] rounded-full flex flex-col items-center justify-center pointer-events-none transition-all duration-300">
              {hoveredIndex !== null && activeSegments[hoveredIndex] ? (
                <>
                  <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold text-center px-1 truncate max-w-full">
                    {activeSegments[hoveredIndex].name}
                  </span>
                  <span className="text-sm font-black text-white mt-0.5">
                    {formatRupiah(activeSegments[hoveredIndex].amount)}
                  </span>
                </>
              ) : (
                <div className="w-full h-full bg-[#1a1625] rounded-full"></div>
              )}
            </div>
          </div>

          <div className="overflow-y-auto pr-1 custom-scrollbar flex-1 space-y-3 text-sm font-medium text-gray-400 max-h-[160px] xl:max-h-[200px]">
            {liveChartDistribution.map((item) => {
              const activeIdx = activeSegments.findIndex(s => s.name === item.name);
              const isHovered = hoveredIndex === activeIdx && activeIdx !== -1;

              return (
                <div 
                  key={item.name} 
                  className={`flex justify-between items-center p-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                    isHovered ? 'bg-white/[0.03] scale-[1.01]' : ''
                  }`}
                  onMouseEnter={() => activeIdx !== -1 && setHoveredIndex(activeIdx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center gap-3 w-1/2">
                    <span className={`w-3 h-3 rounded-md ${item.color} transition-transform duration-200 ${isHovered ? 'scale-125' : ''}`}></span>
                    <span className={`transition-colors duration-200 truncate ${isHovered ? 'text-white font-semibold' : 'text-gray-300'}`}>
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-3 w-1/2">
                    <span className={`font-bold w-10 text-right transition-colors duration-200 ${isHovered ? 'text-white' : 'text-gray-400'}`}>
                      {item.percentage}
                    </span>
                    <div className="w-20 bg-[#2d2244] h-1 rounded-full overflow-hidden shrink-0">
                      <div
                        className={`${item.color} h-full rounded-full transition-all duration-500 ease-out`}
                        style={{ width: isLoaded ? item.percentage : "0%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-4 pt-4 border-t border-white/[0.03] flex justify-between items-center text-xs shrink-0">
          <span className="text-gray-400">Monthly Total</span>
          <span className="font-bold text-[#7c4dff] text-sm">{formatRupiah(totalSpending)}</span>
        </div>
      </div>
    </>
  );
}