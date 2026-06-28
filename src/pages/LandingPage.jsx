import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { landingContent } from "../data/landingData";
import StepCard from "../components/StepCard";
import FeatureCard from "../components/FeatureCard";
import FaqItem from "../components/FaqItem";
import ancerLogo from "../assets/logo/ancer logo.png";
import logoJl from "../assets/logo/2560x1866-Cerita-JLI.png";
import logoMrt from "../assets/logo/MRT_Jakarta_(logo_only).svg.png";
import logoTj from "../assets/logo/TransJakarta_Logo_(cropped).svg.png";
import logoLrt from "../assets/logo/Jabodebek_LRT.svg.png";

export default function LandingPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("id");
  const [stationOrigin, setStationOrigin] = useState("");
  const [stationDest, setStationDest] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [emailInput, setEmailInput] = useState("");

  const currentContent = landingContent[lang];

  const handleSearchRoute = (e) => {
    e.preventDefault();
    navigate("/route-builder", { 
      state: { 
        origin: stationOrigin, 
        destination: stationDest 
      } 
    });
  };

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

        <h1 className="text-[34px] sm:text-[50px] md:text-[62px] font-black tracking-[-1.5px] text-[#18102B] leading-[1.08] max-w-4xl text-center mb-6">
          {currentContent.headline01}<br /><span className="text-[#834DFB]">{currentContent.headline02}</span>
        </h1>

        <p className="text-[#18102B]/60 text-sm sm:text-base md:text-lg font-medium max-w-2xl text-center leading-[1.6] mb-12">
          {currentContent.subHeadline}
        </p>

        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-[0_20px_50px_rgba(24,16_43,0.06)] border border-[#18102B]/5 p-5 md:p-6 mb-16">
          <form onSubmit={handleSearchRoute} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold text-[#18102B]/50 uppercase tracking-wider ml-1">{currentContent.labelOrigin}</label>
              <input 
                type="text" 
                placeholder={currentContent.placeholderOrigin} 
                value={stationOrigin}
                onChange={(e) => setStationOrigin(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-[#18102B]/10 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#834DFB] transition-colors"
                required
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
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#834DFB] hover:bg-[#723ee3] text-white rounded-xl py-3.5 px-6 font-bold text-sm shadow-md text-center transition-all duration-200 cursor-pointer"
            >
              {currentContent.btnSearch}
            </button>
          </form>
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
            <StepCard 
              key={step.no} 
              no={step.no} 
              title={step.title} 
              desc={step.desc} 
            />
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
              <FeatureCard 
                key={idx} 
                idx={idx} 
                title={item.title} 
                desc={item.desc} 
              />
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
            <FaqItem 
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
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