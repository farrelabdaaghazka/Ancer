import React from 'react';

export default function ActionCard({ label, labelColorClass, title, description, hoverClass, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`bg-[#1a1625] border border-white/5 rounded-2xl p-6 flex-1 flex flex-col justify-center cursor-pointer transition shadow-sm ${hoverClass}`}
        >
            <p className={`text-xs font-bold ${labelColorClass} tracking-wider mb-2 uppercase`}>{label} →</p>
            <h3 className="font-bold text-xl mb-1">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
}