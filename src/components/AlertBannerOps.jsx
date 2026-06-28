import React from 'react';

export default function AlertBanner({ type, message, buttonText, onButtonClick }) {
  return (
    <div className="bg-[#1a1625] border border-yellow-600/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <svg className="w-6 h-6 text-[#facc15] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <p className="text-sm text-gray-300">
          <span className="font-bold text-[#facc15]">{type}:</span> {message}
        </p>
      </div>
      <button 
        onClick={onButtonClick}
        className="bg-[#facc15] hover:bg-yellow-400 text-black font-semibold text-sm px-6 py-2.5 rounded-lg whitespace-nowrap transition"
      >
        {buttonText}
      </button>
    </div>
  );
}