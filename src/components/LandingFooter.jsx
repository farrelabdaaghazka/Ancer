import { Link } from "react-router";
import ancerLogo from "../assets/logo/ancer logo.png";

export default function LandingFooter({ currentContent, emailInput, setEmailInput, scrollToSection }) {
  return (
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
  );
}