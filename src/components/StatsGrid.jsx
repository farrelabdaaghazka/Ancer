import React from 'react';
import KpiCard from './CardOps';
import { formatRupiah } from '../data/tripsData';

export default function StatsGrid({ totalSpending = 0, cardOpsData = [] }) {
  const budgetLimit = 1590000;
  const remainingBudget = budgetLimit - totalSpending;
  const capitalSaved = 45500; 

  const getDynamicAmount = (id) => {
    switch (id) {
      case 1: return formatRupiah(totalSpending);
      case 2: return formatRupiah(remainingBudget);
      case 3: return formatRupiah(capitalSaved);
      default: return "Rp0";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Menggunakan data dari props hasil kiriman parent */}
      {cardOpsData.map((card) => (
        <KpiCard 
          key={card.id}
          title={card.title}
          amount={getDynamicAmount(card.id)}
          amountColorClass={card.amountColorClass}
          trendIcon={card.trendIcon}
          trendText={card.trendText}
          trendColorClass={card.trendColorClass}
        />
      ))}
    </div>
  );
}