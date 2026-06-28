import { Save, RefreshCw } from "lucide-react";

export default function PersonalInfoForm({ info, setInfo, isSaving, saveSuccess, onSave }) {
  const handleChange = (field, value) => {
    setInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#1a1625]/60 border border-white/5 rounded-3xl p-5 md:p-6 space-y-5 text-left animate-fadeIn">
      <div>
        <h3 className="text-sm font-black text-white uppercase tracking-wider mb-1">Account Information</h3>
        <p className="text-xs text-gray-400">Update your account detail preferences below.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide ml-1">Full Name</label>
          <input 
            type="text" 
            value={info.fullName} 
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full bg-[#110c1b]/50 border border-white/10 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide ml-1">Nickname</label>
          <input 
            type="text" 
            value={info.nickname} 
            onChange={(e) => handleChange("nickname", e.target.value)}
            className="w-full bg-[#110c1b]/50 border border-white/10 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide ml-1">Email Address</label>
          <input 
            type="email" 
            value={info.email} 
            className="w-full bg-[#110c1b]/30 border border-white/5 rounded-xl px-4 py-3 text-xs font-semibold text-gray-500 cursor-not-allowed" 
            disabled
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide ml-1">Phone Number</label>
          <input 
            type="text" 
            value={info.phone} 
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full bg-[#110c1b]/50 border border-white/10 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]"
          />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide ml-1">Home Base Address</label>
          <input 
            type="text" 
            value={info.homeAddress} 
            onChange={(e) => handleChange("homeAddress", e.target.value)}
            className="w-full bg-[#110c1b]/50 border border-white/10 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#834DFB]"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
        {saveSuccess ? (
          <p className="text-xs font-bold text-[#22c55e]">✓ Configuration updated successfully.</p>
        ) : <div />}
        <button
          onClick={onSave}
          disabled={isSaving}
          className="bg-[#834DFB] hover:bg-[#723ee3] text-white font-black text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSaving ? <RefreshCw size={13} className="animate-spin" /> : <Save size={13} />}
          Save Configuration
        </button>
      </div>
    </div>
  );
}