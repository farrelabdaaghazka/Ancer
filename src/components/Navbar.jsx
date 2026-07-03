import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import ancerLogo from "../assets/logo/ancer logo.png";

export default function Navbar({ lang, setLang, scrollToSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FD]/80 backdrop-blur-md border-b border-[#18102B]/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-6 md:px-12">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); setIsMobileMenuOpen(false); }}>
          <img src={ancerLogo} alt="ANCER Logo" className="w-9 h-9 object-contain" />
          <span className="font-black text-[22px] tracking-tight text-[#18102B]">ANCER</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("how-it-works")} className="text-[14px] font-bold text-[#18102B]/60 hover:text-[#834DFB] cursor-pointer transition-colors">How It Works</button>
          <button onClick={() => scrollToSection("features-showcase")} className="text-[14px] font-bold text-[#18102B]/60 hover:text-[#834DFB] cursor-pointer transition-colors">Features</button>
          <button onClick={() => scrollToSection("faq-section")} className="text-[14px] font-bold text-[#18102B]/60 hover:text-[#834DFB] cursor-pointer transition-colors">FAQ</button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-[#18102B]/5 rounded-xl p-0.5 border border-[#18102B]/5">
            <button onClick={() => setLang("id")} className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-all cursor-pointer ${lang === "id" ? "bg-white text-[#834DFB] shadow-sm" : "text-[#18102B]/40"}`}>ID</button>
            <button onClick={() => setLang("en")} className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-all cursor-pointer ${lang === "en" ? "bg-white text-[#834DFB] shadow-sm" : "text-[#18102B]/40"}`}>EN</button>
          </div>
          
          <Link to="/login" className="hidden md:inline-block rounded-xl px-5 py-2 text-sm font-bold border border-[#18102B]/15 text-[#18102B] hover:bg-[#18102B] hover:text-white transition-all duration-200">
            Login
          </Link>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#18102B]/5 text-[#18102B] hover:bg-[#18102B]/10 transition-all cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F9FD] border-b border-[#18102B]/5 px-6 py-6 flex flex-col gap-4 shadow-lg">
          <button onClick={() => { scrollToSection("how-it-works"); setIsMobileMenuOpen(false); }} className="text-left text-[14px] font-bold text-[#18102B]/60 hover:text-[#834DFB] py-1">How It Works</button>
          <button onClick={() => { scrollToSection("features-showcase"); setIsMobileMenuOpen(false); }} className="text-left text-[14px] font-bold text-[#18102B]/60 hover:text-[#834DFB] py-1">Features</button>
          <button onClick={() => { scrollToSection("faq-section"); setIsMobileMenuOpen(false); }} className="text-left text-[14px] font-bold text-[#18102B]/60 hover:text-[#834DFB] py-1">FAQ</button>
          <div className="h-px bg-[#18102B]/5 my-1" />
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center bg-[#18102B]/5 rounded-xl p-0.5 border border-[#18102B]/5">
              <button onClick={() => { setLang("id"); setIsMobileMenuOpen(false); }} className={`px-3 py-1.5 text-[11px] font-black rounded-lg ${lang === "id" ? "bg-white text-[#834DFB]" : "text-[#18102B]/40"}`}>ID</button>
              <button onClick={() => { setLang("en"); setIsMobileMenuOpen(false); }} className={`px-3 py-1.5 text-[11px] font-black rounded-lg ${lang === "en" ? "bg-white text-[#834DFB]" : "text-[#18102B]/40"}`}>EN</button>
            </div>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="rounded-xl px-5 py-2 text-center text-sm font-bold bg-[#834DFB] text-white flex-1 shadow-md">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}