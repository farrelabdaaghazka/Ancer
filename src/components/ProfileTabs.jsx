export default function ProfileTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="flex gap-2 border-b border-white/5 pb-px mb-6 overflow-x-auto custom-scrollbar whitespace-nowrap">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-xs font-black border-b-2 transition-all cursor-pointer ${
              isActive 
                ? "border-[#834DFB] text-[#834DFB]" 
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}