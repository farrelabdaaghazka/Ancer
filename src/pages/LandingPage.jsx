import { useState } from "react";
import { Link } from "react-router-dom";

import ancerLogo from "../assets/logo/ancer logo.png";
import logoJl from "../assets/logo/2560x1866-Cerita-JLI.png";
import logoMrt from "../assets/logo/MRT_Jakarta_(logo_only).svg.png";
import logoTj from "../assets/logo/TransJakarta_Logo_(cropped).svg.png";

export default function LandingPage() {
  const [stationOrigin, setStationOrigin] = useState("");
  const [stationDest, setStationDest] = useState("");

  const featureItems = [
    {
      number: "01",
      title: "Route Builder",
      desc: "Ketik lokasi asal dan tujuan, sistem langsung meramu kombinasi rute MRT, KRL, dan TransJakarta tercepat beserta estimasi tarif totalnya. Sempurna untuk turis menghindari nyasar dan komuter menghemat waktu."
    },
    {
      number: "02",
      title: "Live Radar",
      desc: "Menghilangkan kecemasan menunggu di ruang publik. Pantau posisi pergerakan armada transum aktif dan dapatkan estimasi waktu kedatangan (ETA) yang presisi di tanganmu."
    },
    {
      number: "03",
      title: "Mobility Ledger",
      desc: "Catat dan verifikasi pengeluaran transportasi harianmu secara otomatis. Sangat berguna bagi komuter untuk memantau sisa budget bulanan dan bagi wisatawan asing untuk mengelola travel budget selama berlibur."
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] text-[#18102B] font-sans selection:bg-[#834DFB]/20 overflow-x-hidden">
      
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-[#F8F9FD]/80 backdrop-blur-md border-b border-[#18102B]/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 md:px-12">
          
          <div className="flex items-center gap-3">
            <img src={ancerLogo} alt="ANCER Logo" className="w-9 h-9 object-contain" />
            <span className="font-black text-[22px] tracking-tight text-[#18102B]">ANCER</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection("features-showcase")} className="text-[15px] font-semibold text-[#18102B]/60 hover:text-[#834DFB] cursor-pointer transition-colors">Features</button>
            <button onClick={() => scrollToSection("core-mission")} className="text-[15px] font-semibold text-[#18102B]/60 hover:text-[#834DFB] cursor-pointer transition-colors">About System</button>
          </div>

          <Link to="/login" className="rounded-xl px-6 py-2.5 text-sm font-bold border border-[#18102B]/15 text-[#18102B] hover:bg-[#18102B] hover:text-white transition-all duration-200">
            Login
          </Link>
        </div>
      </nav>

      <main className="pt-[140px] pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center relative">
        <div className="inline-flex items-center gap-2 bg-[#834DFB]/8 border border-[#834DFB]/15 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#834DFB] animate-pulse"></span>
          <span className="text-[#834DFB] text-xs font-bold uppercase tracking-wider">Jakarta Unified Transit Ecosystem</span>
        </div>

        <h1 className="text-[36px] sm:text-[48px] md:text-[58px] font-black tracking-[-1.5px] text-[#18102B] leading-[1.1] max-w-4xl text-center mb-6">
          Navigate Jakarta’s Transit.<br /><span className="text-[#834DFB]">Zero Guesswork.</span>
        </h1>

        <p className="text-[#18102B]/60 text-base md:text-lg font-medium max-w-2xl text-center leading-[1.6] mb-12">
          Platform pemetaan rute multi-moda terintegrasi. Solusi cerdas komuter lokal menghindari keterlambatan dan panduan andal wisatawan asing menjelajahi kota.
        </p>

        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-[0_20px_50px_rgba(24,16,43,0.06)] border border-[#18102B]/5 p-5 md:p-6 mb-20 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold text-[#18102B]/50 uppercase tracking-wider ml-1">Stasiun / Halte Asal</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Misal: Stasiun Sudirman" 
                  value={stationOrigin}
                  onChange={(e) => setStationOrigin(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-[#18102B]/10 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#834DFB] transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold text-[#18102B]/50 uppercase tracking-wider ml-1">Stasiun / Halte Tujuan</label>
              <input 
                type="text" 
                placeholder="Misal: Halte Kota Tua" 
                value={stationDest}
                onChange={(e) => setStationDest(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-[#18102B]/10 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#834DFB] transition-colors"
              />
            </div>
            <Link to="/login" className="w-full bg-[#834DFB] hover:bg-[#723ee3] text-white rounded-xl py-3.5 px-6 font-bold text-sm shadow-md text-center transition-all duration-200">
              Cari Rute Tercepat
            </Link>
          </div>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-75 border-t border-[#18102B]/5 pt-12">
          <div className="flex flex-col items-center gap-1">
            <img src={logoMrt} alt="MRT Jakarta" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" />
            <span className="text-[10px] font-bold text-[#18102B]/40 uppercase tracking-widest mt-1">MRT System</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={logoTj} alt="TransJakarta" className="h-9 object-contain grayscale hover:grayscale-0 transition-all" />
            <span className="text-[10px] font-bold text-[#18102B]/40 uppercase tracking-widest mt-1">TransJakarta</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={logoJl} alt="JakLingko" className="h-11 object-contain grayscale hover:grayscale-0 transition-all" />
            <span className="text-[10px] font-bold text-[#18102B]/40 uppercase tracking-widest mt-1">Micro-Transit</span>
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl font-black text-[#18102B]">100%</div>
            <div className="text-[10px] font-bold text-[#18102B]/40 uppercase tracking-widest">DKI Transit Covered</div>
          </div>
        </div>
      </main>

      <section id="features-showcase" className="bg-white border-t border-[#18102B]/5 py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-xl text-left">
              <h2 className="text-3xl font-black tracking-tight text-[#18102B] mb-4">Solusi Mobilitas Pintar Tanpa Drama Menunggu</h2>
              <p className="text-[#18102B]/50 font-medium text-sm leading-[1.6]">Sistem manajemen data transportasi terpadu untuk mereduksi ketidakpastian jadwal perjalanan harian Anda.</p>
            </div>
            <div className="flex gap-8 border-l border-[#18102B]/10 pl-6 py-2 shrink-0">
              <div>
                <div className="text-3xl font-black text-[#834DFB]">50K+</div>
                <div className="text-xs font-bold text-[#18102B]/40 uppercase tracking-wider mt-0.5">Active Commuters</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#18102B]">24/7</div>
                <div className="text-xs font-bold text-[#18102B]/40 uppercase tracking-wider mt-0.5">Live Coordinates</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureItems.map((item) => (
              <div key={item.number} className="bg-[#F8F9FD] border border-[#18102B]/5 rounded-2xl p-8 hover:border-[#834DFB] hover:bg-white hover:shadow-xl transition-all duration-300 text-left group">
                <div className="w-12 h-12 rounded-xl bg-[#834DFB]/5 text-[#834DFB] flex items-center justify-center mb-6 font-black text-base group-hover:bg-[#834DFB] group-hover:text-white transition-all">
                  {item.number}
                </div>
                <h3 className="text-lg font-bold text-[#18102B] mb-3">{item.title}</h3>
                <p className="text-[#18102B]/60 text-sm leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="core-mission" className="bg-[#FAFAFE] border-t border-[#18102B]/5 py-20 px-6 text-left scroll-mt-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="text-[#834DFB] font-black text-sm uppercase tracking-widest shrink-0 md:w-32 pt-1">Our Mission</div>
          <p className="text-[#18102B]/70 text-base md:text-lg leading-[1.7] font-medium">
            ANCER dibangun untuk memecahkan fragmentasi informasi moda transportasi umum di wilayah metropolitan Jakarta. Dengan menyatukan data intelijen spasial, kami menyajikan transparansi rute terintegrasi demi mewujudkan kenyamanan bertransportasi yang efisien bagi masyarakat urban dan pendatang.
          </p>
        </div>
      </section>

    </div>
  );
}