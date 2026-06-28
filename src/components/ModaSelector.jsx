export default function ModaSelector({ schema, scenario, setScenario }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#110c1be6] border border-white/15 rounded-2xl p-1.5 backdrop-blur-md z-[1000] flex gap-1 shadow-xl max-w-[90%] overflow-x-auto">
      {Object.keys(schema).map((key) => {
        const isSelected = scenario === key;
        return (
          <button
            key={key}
            onClick={() => setScenario(key)}
            style={{
              borderColor: isSelected ? schema[key].lineColor : "transparent",
              color: isSelected ? schema[key].lineColor : "#6b7280",
              background: isSelected ? `${schema[key].lineColor}15` : "transparent"
            }}
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-[11px] md:text-xs font-black border transition-all cursor-pointer whitespace-nowrap"
          >
            {schema[key].label}
          </button>
        );
      })}
    </div>
  );
}