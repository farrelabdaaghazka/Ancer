export default function TransitLinesLegend({ schema, currentScenario }) {
  return (
    <div className="absolute bottom-5 left-5 bg-[#110c1be6] border border-white/5 rounded-xl p-4 backdrop-blur-md z-[1000] space-y-2.5 text-left shadow-lg hidden lg:block">
      <div className="text-[9px] font-black text-gray-400 tracking-widest uppercase mb-1">TRANSIT LINES</div>
      {Object.keys(schema).map(key => (
        <div key={key} className={`flex items-center gap-3 transition-opacity ${currentScenario === key ? "opacity-100" : "opacity-35"}`}>
          <div style={{ background: schema[key].lineColor }} className="w-4 h-[3px] rounded-full shadow-sm" />
          <span className="text-xs font-bold text-gray-300">{schema[key].transitType}</span>
        </div>
      ))}
    </div>
  );
}