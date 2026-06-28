import React from 'react';

export default function TransitModeToggle({ mode, isSelected, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-2.5 bg-[#110c1b] rounded-lg px-3.5 py-2.5 cursor-pointer transition-all duration-200 select-none border ${isSelected ? 'border-[#834DFB]' : 'border-transparent'
                }`}
        >
            <div className={`w-[14px] h-[14px] rounded-[3px] flex items-center justify-center transition-colors ${isSelected ? 'bg-[#834DFB]' : 'bg-white'
                }`}>
                {isSelected && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                )}
            </div>
            <span className={`text-[12px] font-bold transition-colors ${isSelected ? 'text-white' : 'text-[#6b7280]'
                }`}>
                {mode}
            </span>
        </div>
    );
}