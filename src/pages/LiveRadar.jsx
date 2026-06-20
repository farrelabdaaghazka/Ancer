import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Search, X, Navigation, MapPin, AlertTriangle, Eye } from "lucide-react";

const ROUTING_SCHEMA = {
  MRT: {
    label: "MRT",
    transitType: "MRT Jakarta",
    lineColor: "#834DFB",
    lineName: "MRT SOUTH-NORTH LINE · ACTIVE NAVIGATION",
    fareValue: "Rp14.000",
    destination: "Bundaran HI",
    etaNext: "3 min",
    etaDest: "24 min",
    delayMessage: "Severe Delay: Red Line backlog due to extreme weather.",
    onScheduleLabel: "ON SCHEDULE",
    onScheduleColor: "#22c55e",
    mapCenter: [-6.2446, 106.8006],
    mapZoom: 14,
    stations: [
      { name: "Lebak Bulus", coords: [-6.2894, 106.7742] },
      { name: "Fatmawati", coords: [-6.2803, 106.7944] },
      { name: "Cipete Raya", coords: [-6.2697, 106.7996] },
      { name: "Haji Nawi", coords: [-6.2621, 106.7997] },
      { name: "Blok A", coords: [-6.2550, 106.7998] },
      { name: "Blok M Transit", coords: [-6.2446, 106.8006] },
      { name: "ASEAN", coords: [-6.2365, 106.8015] },
      { name: "Senayan Bank DKI", coords: [-6.2277, 106.8024] },
      { name: "Istora Mandiri", coords: [-6.2215, 106.8112] },
      { name: "Bendungan Hilir", coords: [-6.2114, 106.8178] },
      { name: "Setiabudi Astra", coords: [-6.2038, 106.8224] },
      { name: "Dukuh Atas BNI", coords: [-6.1982, 106.8228] },
      { name: "Bundaran HI", coords: [-6.1950, 106.8231] }
    ]
  },
  LRT: {
    label: "LRT",
    transitType: "LRT Jabodebek",
    lineColor: "#E11D48",
    lineName: "BEKASI LINE · CIKOKO → DUKUH ATAS",
    fareValue: "Rp12.500",
    destination: "Dukuh Atas",
    etaNext: "4 min",
    etaDest: "16 min",
    delayMessage: "Advisory: LRT Bekasi Line technical adjustment near Cawang.",
    onScheduleLabel: "ON TRACK",
    onScheduleColor: "#22c55e",
    mapCenter: [-6.2425, 106.8482],
    mapZoom: 14,
    stations: [
      { name: "Jatimulya", coords: [-6.2572, 107.0182] },
      { name: "Bekasi Barat", coords: [-6.2498, 106.9934] },
      { name: "Cikunir 2", coords: [-6.2524, 106.9632] },
      { name: "Cikunir 1", coords: [-6.2541, 106.9381] },
      { name: "Halim", coords: [-6.2458, 106.8851] },
      { name: "Cawang", coords: [-6.2431, 106.8624] },
      { name: "Ciliwung", coords: [-6.2429, 106.8524] },
      { name: "Cikoko Transit", coords: [-6.2425, 106.8482] },
      { name: "Pancoran", coords: [-6.2418, 106.8374] },
      { name: "Kuningan", coords: [-6.2341, 106.8291] },
      { name: "Rasuna Said", coords: [-6.2218, 106.8302] },
      { name: "Setiabudi", coords: [-6.2114, 106.8294] },
      { name: "Dukuh Atas", coords: [-6.2021, 106.8241] }
    ]
  },
  TJ: {
    label: "TransJakarta",
    transitType: "TransJakarta",
    lineColor: "#F0E100",
    lineName: "CORRIDOR 1 · BLOK M → KOTA",
    fareValue: "Rp3.500",
    destination: "Polda Metro Jaya",
    etaNext: "4 min",
    etaDest: "18 min",
    delayMessage: "Notice: Corridor 1 — 8-min delay at GBK turnover gate.",
    onScheduleLabel: "8 MIN DELAY",
    onScheduleColor: "#F0E100",
    mapCenter: [-6.2300, 106.8100],
    mapZoom: 14,
    stations: [
      { name: "Halte Blok M", coords: [-6.2446, 106.7994] },
      { name: "Masjid Agung", coords: [-6.2361, 106.8005] },
      { name: "Bundaran Senayan", coords: [-6.2271, 106.8021] },
      { name: "Gelora Bung Karno", coords: [-6.2225, 106.8052] },
      { name: "Polda Metro Jaya", coords: [-6.2180, 106.8018] },
      { name: "Bendungan Hilir", coords: [-6.2089, 106.8261] }
    ]
  },
  KRL: {
    label: "KRL",
    transitType: "KRL Commuter",
    lineColor: "#22c55e",
    lineName: "BOGOR LINE · MANGGARAI → KP. BANDAN",
    fareValue: "Rp5.000",
    destination: "Kampung Bandan",
    etaNext: "2 min",
    etaDest: "14 min",
    delayMessage: "Advisory: KRL Bogor Line — signal check at Manggarai.",
    onScheduleLabel: "ON TRACK",
    onScheduleColor: "#22c55e",
    mapCenter: [-6.2013, 106.8230],
    mapZoom: 14,
    stations: [
      { name: "Manggarai", coords: [-6.2148, 106.8506] },
      { name: "Cikini", coords: [-6.2080, 106.8380] },
      { name: "Gondangdia", coords: [-6.1877, 106.8055] },
      { name: "Sudirman Station", coords: [-6.2013, 106.8230] },
      { name: "Karet", coords: [-6.1960, 106.8120] },
      { name: "Tanah Abang", coords: [-6.1852, 106.8105] },
      { name: "Kampung Bandan", coords: [-6.1394, 106.8091] }
    ]
  }
};

const DEFAULT_CENTER = [-6.2148, 106.8400];
const DEFAULT_ZOOM = 13;

const createPulsingIcon = (color) =>
  L.divIcon({
    className: "",
    html: `<div style="position:relative;width:20px;height:20px">
             <div style="position:absolute;inset:-12px;border-radius:50%;background:${color}1a"></div>
             <div style="position:absolute;inset:-5px;border-radius:50%;background:${color}38;animation:ancerPulse 1.8s ease-out infinite"></div>
             <div style="width:20px;height:20px;border-radius:50%;background:${color};box-shadow:0 0 16px ${color}"></div>
           </div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

export default function LiveRadar() {
  const [radarState, setRadarState] = useState("search");
  const [scenario, setScenario] = useState("MRT");
  const [searchQuery, setSearchQuery] = useState("");
  const [showBanner, setShowBanner] = useState(true);
  const [rerouteApplied, setRerouteApplied] = useState(false);
  const [bannerText, setBannerText] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const mapRef = useRef(null);
  const markerGroupRef = useRef(null);
  const pathLineRef = useRef(null);
  const trackingTimerRef = useRef(null);

  const data = ROUTING_SCHEMA[scenario];
  const color = data.lineColor;
  const lastStationIdx = data.stations.length - 1;

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("radar-leaflet-mount", {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        zoomControl: false,
        attributionControl: false
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        className: "ancer-tile"
      }).addTo(mapRef.current);

      markerGroupRef.current = L.layerGroup().addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setCurrentIdx(0);
    setShowBanner(true);
    setRerouteApplied(false);
    setBannerText(null);
    if (trackingTimerRef.current) clearInterval(trackingTimerRef.current);
  }, [scenario]);

  useEffect(() => {
    if (radarState === "active") {
      if (trackingTimerRef.current) clearInterval(trackingTimerRef.current);
      trackingTimerRef.current = setInterval(() => {
        setCurrentIdx((prev) => {
          if (prev >= lastStationIdx) {
            clearInterval(trackingTimerRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);
    } else {
      if (trackingTimerRef.current) clearInterval(trackingTimerRef.current);
    }
    return () => { if (trackingTimerRef.current) clearInterval(trackingTimerRef.current); };
  }, [radarState, lastStationIdx]);

  useEffect(() => {
    if (!mapRef.current || !markerGroupRef.current) return;

    markerGroupRef.current.clearLayers();
    if (pathLineRef.current) mapRef.current.removeLayer(pathLineRef.current);

    const coordsArray = data.stations.map((s) => s.coords);
    pathLineRef.current = L.polyline(coordsArray, {
      color: color,
      weight: 4,
      opacity: 0.85
    }).addTo(mapRef.current);

    data.stations.forEach((st, i) => {
      const isCurrentActive = radarState === "active" ? i === currentIdx : i === 0;

      if (isCurrentActive) {
        L.marker(st.coords, { icon: createPulsingIcon(color) }).addTo(markerGroupRef.current);
      } else {
        L.circleMarker(st.coords, {
          radius: 5,
          color: color,
          fillColor: "#110c1b",
          fillOpacity: 1,
          weight: 2
        }).addTo(markerGroupRef.current);
      }
    });

    const targetCenter = data.stations[currentIdx]?.coords ?? data.mapCenter;
    const targetZoom = radarState === "active" ? 15 : data.mapZoom;
    mapRef.current.flyTo(targetCenter, targetZoom, { animate: true, duration: 1.0 });

  }, [scenario, radarState, currentIdx, color, data]);

  const handleReroute = () => {
    setBannerText("Reroute Applied Successfully. Optimizing track…");
    setRerouteApplied(true);
    setTimeout(() => setShowBanner(false), 1500);
  };

  const isAtTerminus = currentIdx >= lastStationIdx;
  const remaining = lastStationIdx - currentIdx;
  const displayActiveStation = data.stations[currentIdx]?.name ?? data.stations[0].name;
  const displayNextStation = isAtTerminus ? "—" : data.stations[currentIdx + 1].name;
  const displayRemaining = isAtTerminus ? "Arrived" : `${remaining} stops remaining`;

  const badgeLabel = (rerouteApplied || isAtTerminus) ? "ON TRACK" : data.onScheduleLabel;
  const badgeColor = (rerouteApplied || isAtTerminus) ? "#22c55e" : data.onScheduleColor;
  const progressFraction = lastStationIdx > 0 ? currentIdx / lastStationIdx : 1;

  return (
    <div className="flex-1 h-screen flex flex-col bg-[#110c1b] text-white overflow-hidden p-6 md:p-10">
      
      <style>{`
        .ancer-tile { filter: invert(1) hue-rotate(210deg) brightness(0.72) saturate(0.5) contrast(1.12); }
        .leaflet-container { background: #110c1b !important; }
        @keyframes ancerPulse {
          0%   { transform: scale(1);   opacity: 0.85; }
          70%  { transform: scale(3.5); opacity: 0; }
          100% { transform: scale(1);   opacity: 0; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #834DFB;
        }
      `}</style>

      <div className="flex justify-between items-start mb-6 shrink-0 z-10">
        <div>
          <div className="text-[#834DFB] text-[11px] font-bold tracking-[2px] mb-1.5 uppercase">Module B</div>
          <h1 className="text-3xl font-black text-[#F5F3FF] tracking-tight">Live Radar</h1>
        </div>
        <div className="flex gap-1 bg-[#1e1235] border border-white/5 rounded-xl p-1 relative z-30 shadow-md">
          <button 
            onClick={() => setRadarState("search")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${radarState === "search" ? "bg-[#834DFB] text-white shadow-sm" : "text-gray-400 hover:text-white"}`}
          >
            Map View
          </button>
          <button 
            onClick={() => setRadarState("active")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${radarState === "active" ? "bg-[#834DFB] text-white shadow-sm" : "text-gray-400 hover:text-white"}`}
          >
            Active Navigation
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row border border-white/5 bg-[#1a1625]/40 rounded-3xl overflow-hidden shadow-2xl min-h-[500px] relative">
        
        {radarState === "active" && (
          <div className="w-full md:w-[350px] bg-[#1a1625] border-r border-white/5 flex flex-col justify-between p-6 shrink-0 z-20 animate-fadeIn overflow-y-auto">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <div style={{ color: color }} className="text-[10px] font-extrabold tracking-wider mb-2">CHECKPOINT STATUS</div>
                  <div className="text-xs text-gray-400 mb-1">Active Hub</div>
                  <div className="text-xl font-black text-white tracking-tight leading-tight">{displayActiveStation}</div>
                </div>
                <button 
                  onClick={() => setRadarState("search")}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  title="Return to Map"
                >
                  <Eye size={14} />
                </button>
              </div>

              <div className="space-y-4 border-y border-white/5 py-5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Next Stop</span>
                  <span className="font-bold text-white max-w-[150px] truncate text-right">{displayNextStation}</span>
                  <span style={{ color: color }} className="font-extrabold">{isAtTerminus ? "" : data.etaNext}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Final Destination</span>
                  <span className="font-bold text-white max-w-[150px] truncate text-right">{data.destination}</span>
                  <span style={{ color: color }} className="font-extrabold">{isAtTerminus ? "Arrived" : data.etaDest}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Remaining Tracker</span>
                  <span className="font-bold text-white">{displayRemaining}</span>
                </div>
              </div>

              <div className="bg-[#110c1b]/60 border border-white/5 rounded-2xl p-4 space-y-3.5 animate-fadeIn">
                <div className="text-[9px] font-black text-gray-500 tracking-wider uppercase">Live Fleet Intelligence</div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Armada ID</span>
                  <span className="font-bold text-gray-200 uppercase tracking-wide">{scenario}-{Math.floor(100 + Math.random() * 900)}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Velocity</span>
                  <span className="font-extrabold text-[#22c55e]">{isAtTerminus ? "0 km/h" : `${Math.floor(65 + Math.random() * 20)} km/h`}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Gerbong Density</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#834DFB]/10 text-[#834DFB] border border-[#834DFB]/20">MODERATE</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-gray-400 mb-0.5">Integrated Fare</div>
                <div className="text-xl font-black text-[#F0E100]">{data.fareValue}</div>
              </div>
              <div 
                style={{ color: badgeColor, borderColor: `${badgeColor}30`, background: `${badgeColor}12` }}
                className="rounded-lg px-3 py-1 text-[10px] font-black border tracking-wide"
              >
                {badgeLabel}
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 h-full relative z-10 flex flex-col">
          
          {radarState === "search" && (
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-[1000] animate-fadeIn">
              <div className="flex items-center gap-3 bg-[#110c1be6] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-xl shadow-xl">
                <Search size={16} style={{ color: color }} className="shrink-0" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Cari stasiun ${data.transitType}...`} 
                  className="flex-1 bg-transparent border-none text-sm text-white outline-none font-semibold placeholder-gray-500"
                />
                {searchQuery && <X size={14} className="text-gray-400 cursor-pointer" onClick={() => setSearchQuery("")} />}
              </div>

              {searchQuery && (
                <div className="mt-2 bg-[#110c1bf5] border border-white/10 rounded-xl max-h-48 overflow-y-auto shadow-2xl backdrop-blur-xl">
                  {data.stations
                    .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map(s => (
                      <button 
                        key={s.name}
                        onClick={() => {
                          setSearchQuery("");
                          if(mapRef.current) mapRef.current.flyTo(s.coords, 15);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-left border-b border-white/5 text-xs font-bold text-gray-300 hover:text-white"
                      >
                        <MapPin size={12} style={{ color: color }} />
                        {s.name}
                      </button>
                    ))}
                </div>
              )}
            </div>
          )}

          {radarState === "active" && showBanner && (
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-[1000] animate-fadeIn">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3.5 flex items-center gap-3 backdrop-blur-md shadow-lg">
                <AlertTriangle size={15} className="text-[#F0E100] shrink-0" />
                <span className="flex-1 text-xs font-bold text-gray-200 tracking-tight">{bannerText ?? data.delayMessage}</span>
                {!rerouteApplied && (
                  <button 
                    onClick={handleReroute}
                    className="bg-[#F0E100] text-[#110c1b] text-[10px] font-black px-3 py-1.5 rounded-lg hover:opacity-90 shrink-0 cursor-pointer"
                  >
                    Reroute
                  </button>
                )}
                <X size={14} className="text-gray-500 hover:text-white cursor-pointer" onClick={() => setShowBanner(false)} />
              </div>
            </div>
          )}

          <div id="radar-leaflet-mount" className="w-full flex-1 z-0" />

          {radarState === "search" && (
            <div className="absolute bottom-5 left-5 bg-[#110c1be6] border border-white/5 rounded-xl p-4 backdrop-blur-md z-[1000] space-y-2.5 text-left shadow-lg hidden sm:block">
              <div className="text-[9px] font-black text-gray-400 tracking-widest uppercase mb-1">TRANSIT LINES</div>
              {Object.keys(ROUTING_SCHEMA).map(key => (
                <div key={key} className={`flex items-center gap-3 transition-opacity ${scenario === key ? "opacity-100" : "opacity-35"}`}>
                  <div style={{ background: ROUTING_SCHEMA[key].lineColor }} className="w-4 h-[3px] rounded-full shadow-sm" />
                  <span className="text-xs font-bold text-gray-300">{ROUTING_SCHEMA[key].transitType}</span>
                </div>
              ))}
            </div>
          )}

          {radarState === "search" && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#110c1be6] border border-white/15 rounded-2xl p-2 backdrop-blur-md z-[1000] flex gap-1 shadow-xl">
              {Object.keys(ROUTING_SCHEMA).map((key) => {
                const isSelected = scenario === key;
                return (
                  <button
                    key={key}
                    onClick={() => setScenario(key)}
                    style={{
                      borderColor: isSelected ? ROUTING_SCHEMA[key].lineColor : "transparent",
                      color: isSelected ? ROUTING_SCHEMA[key].lineColor : "#6b7280",
                      background: isSelected ? `${ROUTING_SCHEMA[key].lineColor}15` : "transparent"
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-black border transition-all cursor-pointer"
                  >
                    {ROUTING_SCHEMA[key].label}
                  </button>
                );
              })}
            </div>
          )}

          {radarState === "search" && (
            <button 
              onClick={() => setRadarState("active")}
              style={{ background: color }}
              className="absolute bottom-5 right-5 text-[#110c1b] px-5 py-3 rounded-xl text-xs font-black z-[1000] flex items-center gap-2 shadow-xl hover:opacity-90 cursor-pointer transition-all"
            >
              <Navigation size={13} fill="#110c1b" />
              Start Navigation
            </button>
          )}

          {radarState === "active" && (
            <div className="absolute bottom-5 left-6 right-6 bg-[#110c1be6] border border-white/5 rounded-2xl p-5 pb-7 backdrop-blur-md z-[1000] shadow-xl animate-fadeIn text-left">
              <div style={{ color: `${color}cc` }} className="text-[9px] font-black tracking-widest mb-4 uppercase">{data.lineName}</div>
              
              <div className="w-full overflow-x-auto pb-3 custom-scrollbar">
                <div 
                  style={{ width: `${Math.max(100, data.stations.length * 95)}px` }} 
                  className="relative flex items-center justify-between px-6 my-4 h-16"
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
                            <div style={{ background: `radial-gradient(circle, ${color}55, transparent)` }} className="absolute w-10 h-10 rounded-full" />
                            <div style={{ background: color, borderColor: color }} className="w-4 h-4 rounded-full border-4 z-10 shadow-lg" />
                          </div>
                        ) : (
                          <div 
                            style={{ borderColor: isPast ? "transparent" : `${color}60`, background: isPast ? "#341F60" : "#110c1b" }} 
                            className={`w-3 h-3 rounded-full ${isPast ? "" : "border-2"}`}
                          />
                        )}
                        
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 text-center overflow-visible">
                          <div 
                            style={{ color: isActive ? color : (isPast ? "rgba(245,243,255,0.3)" : "rgba(245,243,255,0.65)") }} 
                            className={`text-[10px] tracking-tight leading-tight whitespace-normal break-words pt-1.5 ${isActive ? "font-black" : "font-bold"}`}
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
          )}

        </div>
      </div>

    </div>
  );
}