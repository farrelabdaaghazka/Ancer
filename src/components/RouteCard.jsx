import React from 'react';

export default function RouteCard({
    badgeText, badgeClass, cardBorderClass,
    time, fare, fareColorClass, radarIconClass,
    steps, onRadarClick
}) {
    return (
        <div className={`bg-[#1a1625] border ${cardBorderClass} rounded-2xl p-6 flex flex-col h-auto text-left relative`}>
            <div className={`${badgeClass} text-[10px] font-bold px-3 py-1.5 rounded-full w-fit mb-4 flex items-center gap-1`}>
                {badgeText}
            </div>
            <div className="text-[40px] leading-none font-black text-white mb-1">{time}</div>
            <p className="text-[11px] text-gray-500 font-medium mb-8">Estimated travel time</p>

            <div className="relative border-l border-white/10 ml-[7px] pl-6 space-y-6 flex-grow">
                {steps.map((step, index) => (
                    <div key={index} className="relative">
                        <div className={`absolute -left-[30.5px] top-1 w-[13px] h-[13px] rounded-full ${step.dotClass}`} />

                        <div className={`text-[13px] font-bold text-white leading-none mt-1 ${step.transit ? 'mb-2' : ''}`}>
                            {step.station}
                        </div>

                        {step.transit && (
                            <div className="flex items-center gap-3">
                                <span className={`text-[9px] font-bold px-2 py-1 rounded ${step.transit.badgeClass}`}>
                                    {step.transit.name}
                                </span>
                                <span className="text-[10px] text-gray-500 flex items-center gap-1">
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    {step.transit.duration}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
                <div className="mb-4">
                    <div className="text-[10px] text-gray-500 font-medium mb-1">Total Fare</div>
                    <div className={`text-[22px] font-black leading-none ${fareColorClass}`}>{fare}</div>
                </div>

                <button className="w-full bg-[#834DFB] hover:bg-purple-600 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Save to Travel Calendar
                </button>

                <div className="flex items-center gap-3 my-3">
                    <div className="flex-1 h-px bg-white/5"></div>
                    <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">OR</span>
                    <div className="flex-1 h-px bg-white/5"></div>
                </div>

                <button
                    onClick={onRadarClick}
                    className="w-full bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                    <svg className={`w-4 h-4 ${radarIconClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    View on Live Radar
                </button>
            </div>
        </div>
    );
}