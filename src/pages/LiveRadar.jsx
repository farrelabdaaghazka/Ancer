import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Navigation, X, AlertTriangle } from "lucide-react";
import { ROUTING_SCHEMA, DEFAULT_CENTER, DEFAULT_ZOOM } from "../data/radarData";
import SearchOverlay from "../components/SearchOverlay";
import ActiveNavPanel from "../components/ActiveNavPanel";
import TransitTimeline from "../components/TransitTimeline";

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

  return (
    <div className="flex-1 h-screen flex flex-col bg-[#110c1b] text-white overflow-hidden p-4 md:p-10">
      
      <style>{`
        .ancer-tile { filter: invert(1) hue-rotate(210deg) brightness(0.72) saturate(0.5) contrast(1.12); }
        .leaflet-container { background: #110c1b !important; }
        @keyframes ancerPulse {
          0%   { transform: scale(1);   opacity: 0.85; }
          70%  { transform: scale(3.5); opacity: 0; }
          100% { transform: scale(1);   opacity: 0; }
        }
        .custom-scrollbar::-webkit-scrollbar { height: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.12); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #834DFB; }
      `}</style>

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

      <div className="flex-1 flex flex-col md:flex-row border border-white/5 bg-[#1a1625]/40 rounded-3xl overflow-hidden shadow-2xl relative">
        
        {radarState === "active" && (
          <ActiveNavPanel 
            color={color}
            displayActiveStation={displayActiveStation}
            setRadarState={setRadarState}
            displayNextStation={displayNextStation}
            data={data}
            isAtTerminus={isAtTerminus}
            displayRemaining={displayRemaining}
            scenario={scenario}
            badgeColor={badgeColor}
            badgeLabel={badgeLabel}
          />
        )}

        <div className="flex-1 h-full relative z-10 flex flex-col">
          
          {radarState === "search" && (
            <SearchOverlay 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              data={data}
              color={color}
              mapRef={mapRef}
            />
          )}

          {radarState === "active" && showBanner && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-[1000] animate-fadeIn">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3 flex items-center gap-3 backdrop-blur-md shadow-lg">
                <AlertTriangle size={15} className="text-[#F0E100] shrink-0" />
                <span className="flex-1 text-[11px] md:text-xs font-bold text-gray-200 tracking-tight">{bannerText ?? data.delayMessage}</span>
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
          )}

          <div id="radar-leaflet-mount" className="w-full flex-1 z-0" />

          {radarState === "search" && (
            <div className="absolute bottom-5 left-5 bg-[#110c1be6] border border-white/5 rounded-xl p-4 backdrop-blur-md z-[1000] space-y-2.5 text-left shadow-lg hidden lg:block">
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#110c1be6] border border-white/15 rounded-2xl p-1.5 backdrop-blur-md z-[1000] flex gap-1 shadow-xl max-w-[90%] overflow-x-auto">
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
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-[11px] md:text-xs font-black border transition-all cursor-pointer whitespace-nowrap"
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
              className="absolute bottom-4 right-4 text-[#110c1b] px-4 py-2.5 rounded-xl text-xs font-black z-[1000] hidden sm:flex items-center gap-2 shadow-xl hover:opacity-90 cursor-pointer transition-all"
            >
              <Navigation size={13} fill="#110c1b" />
              Start Navigation
            </button>
          )}

          {radarState === "active" && (
            <TransitTimeline 
              color={color}
              data={data}
              currentIdx={currentIdx}
              lastStationIdx={lastStationIdx}
            />
          )}

        </div>
      </div>

    </div>
  );
}