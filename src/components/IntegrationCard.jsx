export default function IntegrationCard({ app, onToggleConnect }) {
  const isConnected = app.status === "Connected";
  return (
    <div className="bg-[#1a1625]/60 border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-5 text-left animate-fadeIn">
      <div className="space-y-3.5">
        <div className="flex justify-between items-center">
          <h4 className="text-xs font-black text-white tracking-wide">{app.name}</h4>
          <span className={`px-2 py-0.5 rounded text-[9px] font-black tracking-wider uppercase ${isConnected ? "bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20" : "bg-gray-500/10 text-gray-400 border border-white/5"}`}>
            {app.status}
          </span>
        </div>
        
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Connected Account</div>
          <div className="text-xs font-semibold text-gray-300 truncate">{app.account}</div>
        </div>

        <div className="flex justify-between items-center pt-1">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Fare Hub Cash</span>
          {isConnected ? (
            <div className="flex items-baseline gap-1 bg-[#834DFB]/5 border border-[#834DFB]/10 rounded-lg px-2 py-0.5">
              <span className="text-xs font-black text-[#F0E100]">{app.balance}</span>
            </div>
          ) : (
            <span className="text-[10px] text-gray-500 italic font-medium">Awaiting link…</span>
          )}
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 w-full">
        <button
          onClick={() => onToggleConnect(app.id)}
          className={`w-full py-2.5 rounded-xl text-[11px] font-bold border transition-all cursor-pointer text-center ${
            isConnected 
              ? "bg-white/5 border-white/10 text-red-400 hover:bg-red-500/10 hover:border-red-500/20" 
              : "bg-[#834DFB] border-transparent text-white hover:bg-[#723ee3]"
          }`}
        >
          {isConnected ? "Disconnect Account" : "Authorize Connection"}
        </button>
      </div>
    </div>
  );
}