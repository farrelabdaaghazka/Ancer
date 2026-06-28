export default function SearchWidget({ currentContent, stationOrigin, setStationOrigin, stationDest, setStationDest, onSubmit }) {
  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-[0_20px_50px_rgba(24,16_43,0.06)] border border-[#18102B]/5 p-5 md:p-6 mb-16">
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div className="flex flex-col gap-2 text-left">
          <label className="text-xs font-bold text-[#18102B]/50 uppercase tracking-wider ml-1">{currentContent.labelOrigin}</label>
          <input 
            type="text" 
            placeholder={currentContent.placeholderOrigin} 
            value={stationOrigin}
            onChange={(e) => setStationOrigin(e.target.value)}
            className="w-full bg-[#FAFAFA] border border-[#18102B]/10 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#834DFB] transition-colors"
            required
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label className="text-xs font-bold text-[#18102B]/50 uppercase tracking-wider ml-1">{currentContent.labelDest}</label>
          <input 
            type="text" 
            placeholder={currentContent.placeholderDest} 
            value={stationDest}
            onChange={(e) => setStationDest(e.target.value)}
            className="w-full bg-[#FAFAFA] border border-[#18102B]/10 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#834DFB] transition-colors"
            required
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-[#834DFB] hover:bg-[#723ee3] text-white rounded-xl py-3.5 px-6 font-bold text-sm shadow-md text-center transition-all duration-200 cursor-pointer"
        >
          {currentContent.btnSearch}
        </button>
      </form>
    </div>
  );
}