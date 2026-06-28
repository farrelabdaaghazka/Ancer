export default function StepCard({ no, title, desc }) {
  return (
    <div className="flex flex-col text-left bg-white border border-[#18102B]/5 p-8 pt-12 rounded-2xl relative shadow-sm min-h-[220px] w-full">
      <div className="absolute top-4 right-6 text-6xl font-black text-[#834DFB]/10 select-none leading-none">
        {no}
      </div>
      <h3 className="text-xl font-extrabold text-[#18102B] mb-3 pr-8 tracking-tight">
        {title}
      </h3>
      <p className="text-[#18102B]/60 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}