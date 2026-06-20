import { useState } from "react";
import { Link } from "react-router-dom";

import ancerLogo from "../assets/logo/ancer logo.png";
import logoJl from "../assets/logo/2560x1866-Cerita-JLI.png";
import logoMrt from "../assets/logo/MRT_Jakarta_(logo_only).svg.png";
import logoTj from "../assets/logo/TransJakarta_Logo_(cropped).svg.png";
import logoLrt from "../assets/logo/Jabodebek_LRT.svg.png";

export default function LandingPage() {
  const [lang, setLang] = useState("id");
  const [stationOrigin, setStationOrigin] = useState("");
  const [stationDest, setStationDest] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [emailInput, setEmailInput] = useState("");

  const content = {
    id: {
      badge: "Platform Integrasi Navigasi Transum Jakarta",
      headline01: "Navigasi Transit Jakarta.",
      headline02: "Tanpa Teka-Teki.",
      subHeadline: "Satu engine terpadu untuk kalkulasi tarif multi-moda, peta radar interaktif, dan pelacakan pengeluaran otomatis. Dirancang presisi untuk mempermudah mobilitas harian komuter urban dan wisatawan asing.",
      labelOrigin: "Titik Keberangkatan (Stasiun/Halte)",
      labelDest: "Titik Tujuan (Stasiun/Halte)",
      placeholderOrigin: "Misal: Stasiun Sudirman",
      placeholderDest: "Misal: Halte Kota Tua",
      btnSearch: "Cari Rute Terbaik",
      statCommuters: "Komuter Aktif",
      statCoordinates: "Koordinat Diperbarui",
      hiwTitle: "Bagaimana ANCER Bekerja?",
      hiwSub: "Tiga langkah mudah menguasai jaringan transportasi publik Jakarta tanpa drama tersesat.",
      hiwSteps: [
        { no: "1", title: "Tentukan Tujuan", desc: "Masukkan lokasi asal dan tujuan Anda. ANCER memproses seluruh jaringan MRT, LRT, KRL, dan TransJakarta secara simultan." },
        { no: "2", title: "Bandingkan Tarif & Waktu", desc: "Dapatkan kalkulasi biaya akurat beserta kombinasi moda tercepat yang disesuaikan dengan anggaran dan waktu Anda." },
        { no: "3", title: "Mulai Navigasi", desc: "Aktifkan Live Radar untuk memantau posisi armada secara real-time hingga Anda tiba di lokasi tujuan dengan aman." }
      ],
      featTitle: "Ekosistem Fitur Utama",
      featSub: "Didesain khusus untuk menyulap data transit mentah menjadi navigasi intuitif.",
      features: [
        { title: "Route Builder", desc: "Merajut integrasi koridor TransJakarta, jalur bawah tanah MRT, hingga Commuter Line dalam satu opsi perjalanan terpadu yang logis." },
        { title: "Live Radar", desc: "Pantau koordinat GPS aktual pergerakan armada terdekat. Ketahui estimasi kedatangan (ETA) secara presisi langsung dari genggaman." },
        { title: "Mobility Ledger", desc: "Pencatatan otomatis akumulasi biaya perjalanan bulanan. Membantu komuter menghemat pengeluaran dan turis mengelola travel budget." }
      ],
      missionTitle: "Misi Utama ANCER Engine",
      missionDesc: "Kami hadir untuk menghapus fragmentasi informasi transportasi publik di Jakarta. Dengan menyatukan intelijen spasial dan transparansi tarif harian, ANCER berdedikasi membangun kenyamanan mobilitas yang inklusif bagi seluruh warga urban dan wisatawan global.",
      faqTitle: "Pertanyaan yang Sering Diajukan (FAQ)",
      faqSub: "Informasi cepat seputar operasional sistem navigasi ANCER.",
      faqs: [
        { q: "Apakah data jadwal dan tarif di ANCER bersifat real-time?", a: "Ya, ANCER terintegrasi langsung dengan API data terbuka milik otoritas transportasi Jakarta untuk menyajikan jadwal kedatangan dan kalkulasi tarif paling mutakhir." },
        { q: "Apakah platform ini ramah untuk wisatawan asing?", a: "Sangat ramah. Dengan dukungan sistem dwi-bahasa (ID/EN) penuh dan peta rute visual yang intuitif, turis asing dapat menjelajahi Jakarta layaknya warga lokal." },
        { q: "Bagaimana cara kerja fitur Mobility Ledger?", a: "Setelah masuk ke akun Anda, Ledger akan merekam rute yang Anda pilih dan menghitung pengeluaran ongkosnya secara otomatis ke dalam dasbor finansial pribadi Anda." }
      ],
      ctaTitle: "Kuasai Mobilitas Urban Jakarta Sekarang",
      ctaSub: "Bergabunglah dengan ribuan komuter cerdas lainnya dan rasakan kemudahan transit multi-moda tanpa kendala.",
      ctaBtn: "Mulai Perjalanan Gratis",
      footerDesc: "Platform kecerdasan spasial dan transparansi biaya transportasi publik modern terintegrasi untuk wilayah metropolitan Jakarta.",
      footerCol1: "Perusahaan",
      footerCol2: "Produk",
      footerCol3: "Newsletter",
      newsPlaceholder: "Masukkan alamat email Anda",
      newsBtn: "Langganan"
    },
    en: {
      badge: "Unified Jakarta Transit Navigation Platform",
      headline01: "Navigate Jakarta’s Transit.",
      headline02: "Zero Guesswork.",
      subHeadline: "A unified engine for multi-modal fare calculation, interactive radar mapping, and automated expense logging. Built precisely to simplify mobility for urban commuters and international tourists.",
      labelOrigin: "Origin Point (Station/Stop)",
      labelDest: "Destination Point (Station/Stop)",
      placeholderOrigin: "e.g., Sudirman Station",
      placeholderDest: "e.g., Kota Tua Stop",
      btnSearch: "Find Best Route",
      statCommuters: "Active Commuters",
      statCoordinates: "Coordinates Updated",
      hiwTitle: "How ANCER Works",
      hiwSub: "Three simple steps to master Jakarta's public transportation network without getting lost.",
      hiwSteps: [
        { no: "1", title: "Set Your Destination", desc: "Enter your starting point and destination. ANCER instantly processes all MRT, LRT, KRL, and TransJakarta networks simultaneously." },
        { no: "2", title: "Compare Fares & Time", desc: "Get accurate cost breakdowns and the fastest transit combinations customized to your preferred budget and schedule." },
        { no: "3", title: "Start Navigating", desc: "Activate the Live Radar to monitor fleet positions in real-time until you safely reach your destination." }
      ],
      featTitle: "Core Feature Ecosystem",
      featSub: "Specially designed to transform raw transit data into highly intuitive navigation.",
      features: [
        { title: "Route Builder", desc: "Weaves TransJakarta corridors, underground MRT, and Commuter Lines into a single, logical, integrated travel option." },
        { title: "Live Radar", desc: "Track actual GPS coordinates of nearby fleets. Get precise Estimated Time of Arrival (ETA) updates right in your hand." },
        { title: "Automated Mobility Ledger", desc: "Automated monthly transit cost logging. Helps commuters optimize expenses and tourists manage their vacation travel budget." }
      ],
      missionTitle: "ANCER Core Mission",
      missionDesc: "We exist to eliminate the fragmentation of public transit information across Jakarta. By unifying spatial intelligence and daily fare transparency, ANCER is dedicated to building inclusive mobility convenience for all urban citizens and global travelers.",
      faqTitle: "Frequently Asked Questions (FAQ)",
      faqSub: "Quick information regarding ANCER navigation system operations.",
      faqs: [
        { q: "Is the schedule and fare data on ANCER real-time?", a: "Yes, ANCER integrates directly with Jakarta transit authority open data APIs to deliver up-to-date arrival timetables and fare calculations." },
        { q: "Is this platform foreigner-friendly?", a: "Absolutely. With full bilingual (ID/EN) support and intuitive visual route structures, international tourists can navigate Jakarta like a local." },
        { q: "How does the Mobility Ledger feature work?", a: "Once logged into your account, the Ledger automatically records your chosen routes and logs the fare expenses into a personalized financial dashboard." }
      ],
      ctaTitle: "Master Jakarta’s Urban Mobility Today",
      ctaSub: "Join thousands of smart commuters and experience seamless multi-modal transit without friction.",
      ctaBtn: "Start Journey Free",
      footerDesc: "Integrated spatial intelligence and public transit cost transparency platform engineered modernly for the Jakarta metropolitan area.",
      footerCol1: "Company",
      footerCol2: "Product",
      footerCol3: "Newsletter",
      newsPlaceholder: "Enter your email address",
      newsBtn: "Subscribe"
    }
  };

  const currentContent = content[lang];

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
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={ancerLogo} alt="ANCER Logo" className="w-9 h-9 object-contain" />
            <span className="font-black text-[22px] tracking-tight text-[#18102B]">ANCER</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("how-it-works")} className="text-[14px] font-bold text-[#18102B]/60 hover:text-[#834DFB] cursor-pointer transition-colors">How It Works</button>
            <button onClick={() => scrollToSection("features-showcase")} className="text-[14px] font-bold text-[#18102B]/60 hover:text-[#834DFB] cursor-pointer transition-colors">Features</button>
            <button onClick={() => scrollToSection("faq-section")} className="text-[14px] font-bold text-[#18102B]/60 hover:text-[#834DFB] cursor-pointer transition-colors">FAQ</button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#18102B]/5 rounded-xl p-0.5 border border-[#18102B]/5">
              <button onClick={() => setLang("id")} className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-all cursor-pointer ${lang === "id" ? "bg-white text-[#834DFB] shadow-sm" : "text-[#18102B]/40"}`}>ID</button>
              <button onClick={() => setLang("en")} className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-all cursor-pointer ${lang === "en" ? "bg-white text-[#834DFB] shadow-sm" : "text-[#18102B]/40"}`}>EN</button>
            </div>
            <Link to="/login" className="rounded-xl px-5 py-2 text-sm font-bold border border-[#18102B]/15 text-[#18102B] hover:bg-[#18102B] hover:text-white transition-all duration-200">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <header className="pt-[150px] pb-12 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center relative">
        <div className="inline-flex items-center gap-2 bg-[#834DFB]/8 border border-[#834DFB]/15 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#834DFB] animate-pulse"></span>
          <span className="text-[#834DFB] text-xs font-bold uppercase tracking-wider">{currentContent.badge}</span>
        </div>

        <h1 className="text-[38px] sm:text-[50px] md:text-[62px] font-black tracking-[-1.5px] text-[#18102B] leading-[1.08] max-w-4xl text-center mb-6">
          {currentContent.headline01}<br /><span className="text-[#834DFB]">{currentContent.headline02}</span>
        </h1>

        <p className="text-[#18102B]/60 text-base md:text-lg font-medium max-w-2xl text-center leading-[1.6] mb-12">
          {currentContent.subHeadline}
        </p>

        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-[0_20px_50px_rgba(24,16_43,0.06)] border border-[#18102B]/5 p-5 md:p-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold text-[#18102B]/50 uppercase tracking-wider ml-1">{currentContent.labelOrigin}</label>
              <input 
                type="text" 
                placeholder={currentContent.placeholderOrigin} 
                value={stationOrigin}
                onChange={(e) => setStationOrigin(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-[#18102B]/10 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#834DFB] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold text-[#18102B]/50 uppercase tracking-wider ml-1">{currentContent.labelDest}</label>
              <input 
                type="text" 
                placeholder={currentContent.placeholderDest} 
                value={stationDest}
                onChange={(e) => setStationDest(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-[#18102B]/10 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#834DFB] transition-colors"
              />
            </div>
            <Link to="/login" className="w-full bg-[#834DFB] hover:bg-[#723ee3] text-white rounded-xl py-3.5 px-6 font-bold text-sm shadow-md text-center transition-all duration-200">
              {currentContent.btnSearch}
            </Link>
          </div>
        </div>
      </header>

      <div className="w-full border-y border-[#18102B]/6 bg-white py-6 overflow-hidden mb-24 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8F9FD] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8F9FD] to-transparent z-10"></div>
        
        <div className="flex w-[200%] animate-[marquee_22s_linear_infinite] gap-12 items-center">
          {Array(2).fill(0).map((_, idx) => (
            <div key={idx} className="flex justify-around w-1/2 items-center gap-12 shrink-0">
              <img src={logoMrt} alt="MRT" className="h-8 w-auto object-contain mx-auto" />
              <img src={logoTj} alt="TransJakarta" className="h-7 w-auto object-contain mx-auto" />
              <img src={logoJl} alt="JakLingko" className="h-9 w-auto object-contain mx-auto" />
              <img src={logoLrt} alt="LRT Jabodebek" className="h-7 w-auto object-contain mx-auto" />
              <div className="h-6 w-px bg-[#18102B]/10"></div>
              <div className="text-center">
                <span className="text-lg font-black text-[#834DFB] block leading-none">100%</span>
                <span className="text-[9px] font-bold text-[#18102B]/40 uppercase tracking-widest block mt-0.5">Network Coverage</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section id="how-it-works" className="max-w-7xl mx-auto px-6 mb-28 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-[#18102B] mb-4">{currentContent.hiwTitle}</h2>
          <p className="text-[#18102B]/50 font-medium text-sm">{currentContent.hiwSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.hiwSteps.map((step) => (
            <div key={step.no} className="flex flex-col text-left bg-white border border-[#18102B]/5 p-8 pt-12 rounded-2xl relative shadow-sm min-h-[220px]">
              <div className="absolute top-4 right-6 text-6xl font-black text-[#834DFB]/10 select-none leading-none">{step.no}</div>
              <h3 className="text-xl font-extrabold text-[#18102B] mb-3 pr-8 tracking-tight">{step.title}</h3>
              <p className="text-[#18102B]/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features-showcase" className="bg-white border-t border-[#18102B]/5 py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-xl text-left">
              <h2 className="text-3xl font-black tracking-tight text-[#18102B] mb-4">{currentContent.featTitle}</h2>
              <p className="text-[#18102B]/50 font-medium text-sm leading-[1.6]">{currentContent.featSub}</p>
            </div>
            <div className="flex gap-8 border-l border-[#18102B]/10 pl-6 py-2 shrink-0">
              <div className="text-left">
                <div className="text-3xl font-black text-[#834DFB]">50K+</div>
                <div className="text-xs font-bold text-[#18102B]/40 uppercase tracking-wider mt-0.5">{currentContent.statCommuters}</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-black text-[#18102B]">24/7</div>
                <div className="text-xs font-bold text-[#18102B]/40 uppercase tracking-wider mt-0.5">{currentContent.statCoordinates}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.features.map((item, idx) => (
              <div key={idx} className="bg-[#F8F9FD] border border-[#18102B]/5 rounded-2xl p-8 hover:border-[#834DFB] hover:bg-white hover:shadow-xl transition-all duration-300 text-left group">
                <div className="w-12 h-12 rounded-xl bg-[#834DFB]/5 text-[#834DFB] flex items-center justify-center mb-6 font-black text-base group-hover:bg-[#834DFB] group-hover:text-white transition-all">
                  {`0${idx + 1}`}
                </div>
                <h3 className="text-lg font-bold text-[#18102B] mb-3">{item.title}</h3>
                <p className="text-[#18102B]/60 text-sm leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq-section" className="max-w-4xl mx-auto px-6 py-24 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight text-[#18102B] mb-4">{currentContent.faqTitle}</h2>
          <p className="text-[#18102B]/50 font-medium text-sm">{currentContent.faqSub}</p>
        </div>
        <div className="flex flex-col gap-5">
          {currentContent.faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-[#18102B]/8 rounded-2xl overflow-hidden transition-all shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 text-left font-extrabold text-sm sm:text-base flex justify-between items-center gap-4 cursor-pointer hover:bg-[#F8F9FD]/50 transition-colors"
              >
                <span className="pr-4">{faq.q}</span>
                <span className={`text-2xl font-light transition-transform duration-200 shrink-0 leading-none ${openFaq === index ? "rotate-45 text-[#834DFB]" : "rotate-0 text-[#18102B]/30"}`}>+</span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#18102B]/60 leading-relaxed text-left animate-fadeIn">
                  <div className="w-full h-px bg-[#18102B]/5 mb-4"></div>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FAFAFE] border-t border-[#18102B]/5 py-20 px-6 text-left">
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white border border-[#18102B]/5 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-2 h-6 bg-[#834DFB] rounded-full"></div>
              <h2 className="text-xl font-black text-[#18102B] uppercase tracking-wide">{currentContent.missionTitle}</h2>
            </div>
            <p className="text-[#18102B]/70 text-base md:text-lg leading-[1.75] font-medium border-t md:border-t-0 md:border-l border-[#18102B]/10 pt-6 md:pt-0 md:pl-8">
              {currentContent.missionDesc}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="w-full rounded-3xl bg-gradient-to-r from-[#834DFB] to-[#632bd6] p-8 md:p-14 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
            <div className="text-left max-w-xl">
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3 leading-tight">{currentContent.ctaTitle}</h2>
              <p className="text-white/80 text-sm font-medium leading-relaxed">{currentContent.ctaSub}</p>
            </div>
            <Link to="/login" className="bg-white text-[#834DFB] hover:bg-[#FAFAFA] font-black text-sm px-8 py-4 rounded-xl shadow-lg transition-all shrink-0">
              {currentContent.ctaBtn}
            </Link>
          </div>
        </div>

        <footer className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-[#18102B]/5 grid grid-cols-1 md:grid-cols-4 gap-10 text-xs text-[#18102B]/60">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={ancerLogo} alt="ANCER Logo" className="w-6 h-6 object-contain" />
              <span className="font-black text-lg text-[#18102B]">ANCER</span>
            </div>
            <p className="leading-relaxed font-medium">{currentContent.footerDesc}</p>
          </div>

          <div className="space-y-3 md:pl-10">
            <h4 className="font-black text-sm text-[#18102B]">{currentContent.footerCol1}</h4>
            <ul className="space-y-2 font-semibold">
              <li><button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-[#834DFB] cursor-pointer">Home</button></li>
              <li><button onClick={() => scrollToSection("how-it-works")} className="hover:text-[#834DFB] cursor-pointer">About Us</button></li>
              <li><button onClick={() => scrollToSection("faq-section")} className="hover:text-[#834DFB] cursor-pointer">FAQ</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-black text-sm text-[#18102B]">{currentContent.footerCol2}</h4>
            <ul className="space-y-2 font-semibold">
              <li><Link to="/login" className="hover:text-[#834DFB]">Route Builder</Link></li>
              <li><Link to="/login" className="hover:text-[#834DFB]">Live Radar</Link></li>
              <li><Link to="/login" className="hover:text-[#834DFB]">Mobility Ledger</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-black text-sm text-[#18102B]">{currentContent.footerCol3}</h4>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder={currentContent.newsPlaceholder}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full bg-white border border-[#18102B]/10 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#834DFB]"
              />
              <button 
                onClick={() => { setEmailInput(""); alert("Subscribed!"); }}
                className="w-full bg-[#18102B] text-white hover:bg-[#834DFB] rounded-xl py-2.5 font-bold transition-all cursor-pointer"
              >
                {currentContent.newsBtn}
              </button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 border-t border-[#18102B]/5 pt-6 flex flex-col sm:flex-row justify-between font-bold text-[#18102B]/40 gap-4">
            <div>© {new Date().getFullYear()} ANCER. All rights reserved.</div>
            <div className="flex gap-6">
              <span className="hover:text-[#834DFB] cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#834DFB] cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );
}