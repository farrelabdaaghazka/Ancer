export default function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="bg-white border border-[#18102B]/8 rounded-2xl overflow-hidden transition-all shadow-sm w-full">
      <button 
        onClick={onClick}
        className="w-full p-6 text-left font-extrabold text-sm sm:text-base flex justify-between items-center gap-4 cursor-pointer hover:bg-[#F8F9FD]/50 transition-colors"
      >
        <span className="pr-4">{question}</span>
        <span className={`text-2xl font-light transition-transform duration-200 shrink-0 leading-none ${isOpen ? "rotate-45 text-[#834DFB]" : "rotate-0 text-[#18102B]/30"}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#18102B]/60 leading-relaxed text-left animate-fadeIn">
          <div className="w-full h-px bg-[#18102B]/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}