export default function SmartCard({ card, copiedCard, onCopy }) {
  const isFlazz = card.type.includes("Flazz");
  const isEmoney = card.type.includes("e-Money");
  const isTapcash = card.type.includes("TapCash");
  
  const cardBg = isFlazz 
    ? "from-[#1e1b4b] via-[#2e1065] to-[#110c1b]" 
    : isEmoney 
      ? "from-[#062f4f] via-[#0b132b] to-[#110c1b]" 
      : isTapcash
        ? "from-[#cc5500]/60 via-[#04394e] to-[#110c1b]"
        : "from-[#14532d] via-[#022c22] to-[#110c1b]";
        
  const accentColor = isFlazz ? "#834DFB" : isEmoney ? "#F0E100" : isTapcash ? "#e06c00" : "#22c55e";

  return (
    <div className={`relative rounded-2xl p-5 bg-gradient-to-br ${cardBg} border border-white/10 flex flex-col justify-between min-h-[190px] shadow-2xl overflow-hidden group transition-all duration-300 hover:border-white/20 text-left`}>
      <div style={{ background: `linear-gradient(135deg, ${accentColor}10, transparent)` }} className="absolute inset-0 opacity-40 pointer-events-none" />
      
      <div className="flex justify-between items-start relative z-10 w-full">
        <div className="space-y-0.5">
          <span className="text-[9px] font-black tracking-widest text-white/30 uppercase">ANCER SMART CARD</span>
          <h4 className="text-sm font-black text-white tracking-tight">{card.label}</h4>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span style={{ color: accentColor, borderColor: `${accentColor}30`, background: `${accentColor}15` }} className="px-2 py-0.5 rounded text-[8px] font-black border tracking-wider uppercase">
            {card.type}
          </span>
          {card.isDefault && (
            <span className="text-[8px] font-black bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 rounded px-1.5 py-0.5 tracking-widest">PRIMARY</span>
          )}
        </div>
      </div>

      <div className="relative z-10 my-3">
        <div className="w-7 h-5 bg-amber-500/15 border border-amber-500/25 rounded mb-2 relative overflow-hidden">
          <div className="absolute inset-y-0 left-1/2 w-px bg-amber-500/20" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-amber-500/20" />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm tracking-wider text-gray-200 font-bold">{card.cardNumber}</span>
          <button 
            onClick={() => onCopy(card.cardNumber)}
            className="text-[9px] font-bold text-white/40 hover:text-white transition-colors cursor-pointer shrink-0 bg-white/5 px-1.5 py-0.5 rounded border border-white/5"
          >
            {copiedCard === card.cardNumber ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <div className="pt-2.5 border-t border-white/5 flex justify-between items-center relative z-10 w-full">
        <div>
          <div className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Estimated Balance</div>
          <div className="text-base font-black text-[#F0E100] tracking-tight leading-none mt-0.5">{card.balance}</div>
        </div>
        <button className="text-[9px] font-black text-white/70 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/5 transition-all cursor-pointer">
          Sync Balance
        </button>
      </div>
    </div>
  );
}