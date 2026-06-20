import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CreatePlan from './CreatePlan';
import ScheduleView from './ScheduleView';

export default function Dashboard() {
    // State untuk menyimpan tab yang sedang aktif
    const [activeTab, setActiveTab] = useState('create');

    return (
        <div className="bg-[#110c1b] text-white font-sans flex h-screen overflow-hidden">
            <Sidebar />

            <main className="flex-1 h-full overflow-hidden flex justify-center">
                <div className="w-full max-w-[1440px] p-10 flex flex-col h-full min-h-0">

                    <header className="mb-6 shrink-0">
                        <h2 className="text-[#8b5cf6] text-xs font-bold tracking-[0.2em] mb-2 uppercase">Module A</h2>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Route Planner Engine</h1>
                    </header>

                    {/* Tab Navigation */}
                    <div className="flex gap-8 border-b border-white/10 mb-6 shrink-0">
                        <button
                            onClick={() => setActiveTab('create')}
                            className={`pb-3 border-b-2 text-sm font-semibold transition-colors ${activeTab === 'create'
                                    ? 'border-[#8b5cf6] text-white'
                                    : 'border-transparent text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            Create Plan
                        </button>
                        <button
                            onClick={() => setActiveTab('schedule')}
                            className={`pb-3 border-b-2 text-sm font-semibold transition-colors ${activeTab === 'schedule'
                                    ? 'border-[#8b5cf6] text-white'
                                    : 'border-transparent text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            My Schedule
                        </button>
                    </div>

                    {/* Conditional Rendering: Tampilkan komponen berdasarkan state */}
                    {activeTab === 'create' ? <CreatePlan /> : <ScheduleView />}

                </div>
            </main>
        </div>
    );
}