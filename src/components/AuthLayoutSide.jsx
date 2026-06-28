import React from "react";
import ancerLogo from "../assets/logo/ancer logo.png";

export default function AuthLayoutSide() {
  return (
    <div className="w-full h-full relative border-r border-white/10 overflow-hidden flex flex-col justify-center">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      ></div>

      {/* PURPLE GLOW */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-violet-700/20 blur-[180px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* GRAPH / LINES */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
      >
        <polyline points="120,780 260,600 420,440 650,240 920,40" fill="none" stroke="#7C3AED" strokeWidth="3" />
        <polyline points="0,520 530,450 1000,360" fill="none" stroke="#B89A00" strokeWidth="2" opacity="0.7" />
        <polyline points="180,720 390,430 760,150" fill="none" stroke="#B89A00" strokeWidth="2" opacity="0.5" />
        <polyline points="0,680 700,590 1000,540" fill="none" stroke="#00A87D" strokeWidth="2" opacity="0.5" />
      </svg>

      {/* GLOW POINTS */}
      <div className="absolute top-[74%] left-[28%]">
        <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
      </div>
      <div className="absolute top-[54%] left-[43%]">
        <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
      </div>
      <div className="absolute top-[37%] left-[66%]">
        <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
      </div>
      <div className="absolute top-[10%] left-[82%]">
        <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center px-10 xl:px-16 2xl:px-24 py-12">
        {/* LOGO */}
        <div className="flex items-center gap-2 mb-10">
          <img src={ancerLogo} alt="Ancer Logo" className="w-14 h-14 object-contain" />
          <h1 className="font-black text-3xl xl:text-4xl tracking-tight">ANCER</h1>
        </div>

        {/* TITLE */}
        <h2 className="font-extrabold text-5xl xl:text-6xl 2xl:text-7xl leading-tight max-w-[700px]">
          Empowering urban travelers with civic transparency.
        </h2>
        <p className="mt-6 text-zinc-400 text-lg xl:text-xl max-w-[650px]">
          Real-time transit intelligence for the modern Jakarta commuter.
        </p>

        {/* FEATURES */}
        <div className="flex flex-wrap gap-4 mt-10">
          <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            🚆 MRT + KRL + TransJakarta
          </div>
          <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            🔒 Secure & Private
          </div>
        </div>
      </div>
    </div>
  );
}