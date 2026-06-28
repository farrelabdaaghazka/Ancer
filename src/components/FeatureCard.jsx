export default function FeatureCard({ idx, title, desc }) {
  return (
    <div className="bg-[#F8F9FD] border border-[#18102B]/5 rounded-2xl p-8 hover:border-[#834DFB] hover:bg-white hover:shadow-xl transition-all duration-300 text-left group w-full">
      <div className="w-12 h-12 rounded-xl bg-[#834DFB]/5 text-[#834DFB] flex items-center justify-center mb-6 font-black text-base group-hover:bg-[#834DFB] group-hover:text-white transition-all">
        0{idx + 1}
      </div>
      <h3 className="text-lg font-bold text-[#18102B] mb-3">
        {title}
      </h3>
      <p className="text-[#18102B]/60 text-sm leading-[1.6]">
        {desc}
      </p>
    </div>
  );
}