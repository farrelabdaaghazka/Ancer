import { Search, X, MapPin } from "lucide-react";

export default function SearchOverlay({ searchQuery, setSearchQuery, data, color, mapRef }) {
  return (
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
        {searchQuery && (
          <X size={14} className="text-gray-400 cursor-pointer" onClick={() => setSearchQuery("")} />
        )}
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
                  if (mapRef.current) mapRef.current.flyTo(s.coords, 15);
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
  );
}