import React from 'react';

export default function TripItem({ icon, route, details, price, showDivider = true }) {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded bg-[#110c1b] border border-white/5 flex items-center justify-center text-xl shrink-0">
                        {icon}
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm">{route}</h4>
                        <p className="text-xs text-gray-500 mt-1">{details}</p>
                    </div>
                </div>
                <span className="font-bold">{price}</span>
            </div>
            {showDivider && <hr className="border-white/5" />}
        </>
    );
}