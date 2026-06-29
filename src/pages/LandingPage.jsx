import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { landingContent } from "../data/landingData";

import Navbar from "../components/Navbar";
import SearchWidget from "../components/SearchWidget";
import TransitMarquee from "../components/TransitMarquee";
import StepCard from "../components/StepCard";
import FeatureCard from "../components/FeatureCard";
import FaqItem from "../components/FaqItem";
import LandingFooter from "../components/LandingFooter";

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
      state: { origin: stationOrigin, destination: stationDest } 
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
      
      <Navbar lang={lang} setLang={setLang} scrollToSection={scrollToSection} />

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

        <SearchWidget 
          currentContent={currentContent}
          stationOrigin={stationOrigin}
          setStationOrigin={setStationOrigin}
          stationDest={stationDest}
          setStationDest={setStationDest}
          onSubmit={handleSearchRoute}
        />
      </header>

      <TransitMarquee />

      <section id="how-it-works" className="max-w-7xl mx-auto px-6 mb-28 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-[#18102B] mb-4">{currentContent.hiwTitle}</h2>
          <p className="text-[#18102B]/50 font-medium text-sm">{currentContent.hiwSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.hiwSteps.map((step) => (
            <StepCard key={step.no} no={step.no} title={step.title} desc={step.desc} />
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
              <FeatureCard key={idx} idx={idx} title={item.title} desc={item.desc} />
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
            {/* FIX: Link sekarang sudah aman didefinisikan dan siap dieksekusi */}
            <Link to="/login" className="bg-white text-[#834DFB] hover:bg-[#FAFAFA] font-black text-sm px-8 py-4 rounded-xl shadow-lg transition-all shrink-0">
              {currentContent.ctaBtn}
            </Link>
          </div>
        </div>

        <LandingFooter 
          currentContent={currentContent}
          emailInput={emailInput}
          setEmailInput={setEmailInput}
          scrollToSection={scrollToSection}
        />
      </section>

    </div>
  );
}