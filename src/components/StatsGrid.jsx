import React from 'react';
import KpiCard from './CardOps';
import { formatRupiah } from '../data/tripsData';

export default function StatsGrid({ totalSpending }) {
  const budgetLimit = 1590000;
  const remainingBudget = budgetLimit - totalSpending;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <KpiCard 
        title="Total Commuter Spending This Month"
        amount={formatRupiah(totalSpending)}
        amountColorClass="text-[#9333ea]"
        trendIcon="▲"
        trendText="12% vs last month"
        trendColorClass="text-red-400"
      />

      <KpiCard 
        title="Remaining Travel Budget"
        amount={formatRupiah(remainingBudget)}
        amountColorClass="text-[#facc15]"
        trendText="74% of monthly budget"
        trendColorClass="text-gray-500"
      />

      <KpiCard 
        title="Capital Saved via Integration"
        amount="Rp45.500"
        amountColorClass="text-[#22c55e]"
        trendIcon="↑"
        trendText="Smart routing savings"
        trendColorClass="text-[#22c55e]"
      />
    </div>
  );
}