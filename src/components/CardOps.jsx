import React from 'react';

export default function KpiCard({ title, amount, amountColorClass, trendIcon, trendText, trendColorClass }) {
    return (
        <div className="bg-[#1a1625] border border-white/5 rounded-2xl p-6 shadow-sm">
            <p className="text-gray-400 text-sm mb-4">{title}</p>
            <h3 className={`text-3xl font-bold ${amountColorClass} mb-2`}>{amount}</h3>
            <p className={`text-xs ${trendColorClass} flex items-center gap-1`}>
                {trendIcon && <span>{trendIcon}</span>} {trendText}
            </p>
        </div>
    );
}