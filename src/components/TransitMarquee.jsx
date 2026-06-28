import logoJl from "../assets/logo/2560x1866-Cerita-JLI.png";
import logoMrt from "../assets/logo/MRT_Jakarta_(logo_only).svg.png";
import logoTj from "../assets/logo/TransJakarta_Logo_(cropped).svg.png";
import logoLrt from "../assets/logo/Jabodebek_LRT.svg.png";

export default function TransitMarquee() {
  return (
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
  );
}