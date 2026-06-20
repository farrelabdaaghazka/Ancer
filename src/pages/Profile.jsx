import { useState } from "react";
import { 
  User, 
  MapPin, 
  CreditCard, 
  Link2, 
  Save, 
  CheckCircle2, 
  XCircle, 
  RefreshCw,
  Plus,
  ArrowUpRight
} from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [copiedCard, setCopiedCard] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Farrel Abda Aghazka",
    nickname: "Abda",
    email: "farrelabdaaghazka@gmail.com",
    phone: "+62 812-3456-7890",
    homeAddress: "Kota Tangerang Selatan, Banten",
    workAddress: "Cakrawala University Campus, Jakarta"
  });

  const [transitApps, setTransitApps] = useState([
    { id: "mrt", name: "MyMRT Jakarta", status: "Connected", account: "abda@mrt-passenger.id", balance: "45.000" },
    { id: "krl", name: "C-Access KRL", status: "Connected", account: "+6281234567890", balance: "12.000" },
    { id: "lrt", name: "LRT Jabodebek Hub", status: "Disconnected", account: "—", balance: "—" },
    { id: "jaklingko", name: "JakLingko SuperApp", status: "Connected", account: "abda.aghazka@jaklingko.ch", balance: "27.500" }
  ]);

  const [smartCards, setSmartCards] = useState([
    { id: 1, type: "Flazz BCA", cardNumber: "5008-1234-5678-9012", label: "Kartu Komuter Harian", balance: "Rp87.500", isDefault: true },
    { id: 2, type: "e-Money Mandiri", cardNumber: "6032-9876-5432-1098", label: "Cadangan TransJakarta", balance: "Rp14.000", isDefault: false },
    { id: 3, type: "Kartu Multi Trip (KMT)", cardNumber: "1002-4567-8901", label: "Khusus Jalur Bogor Line", balance: "Rp32.000", isDefault: false }
  ]);

  const handleCopy = (num) => {
    navigator.clipboard.writeText(num.replace(/-/g, ""));
    setCopiedCard(num);
    setTimeout(() => setCopiedCard(null), 2000);
  };

  const toggleAppConnect = (id) => {
    setTransitApps(prev => prev.map(app => {
      if (app.id === id) {
        const isConnected = app.status === "Connected";
        return {
          ...app,
          status: isConnected ? "Disconnected" : "Connected",
          account: isConnected ? "—" : "abda.sync@ancer.id",
          balance: isConnected ? "—" : "50.000"
        };
      }
      return app;
    }));
  };

  const handleSaveProfile = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="flex-1 min-h-screen bg-[#110c1b] text-white p-6 md:p-10 overflow-y-auto">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <div className="text-[#834DFB] text-[11px] font-bold tracking-[2px] mb-1.5 uppercase">Account Sub-System</div>
          <h1 className="text-3xl font-black text-[#F5F3FF] tracking-tight">My Profile</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-64 bg-[#1a1625] border border-white/5 rounded-2xl p-4 flex flex-row lg:flex-col gap-1 shrink-0 overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === "personal" ? "bg-[#834DFB] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            >
              <User size={14} /> Personal Details
            </button>
            <button
              onClick={() => setActiveTab("cards")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === "cards" ? "bg-[#834DFB] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            >
              <CreditCard size={14} /> Smart Cards Ledger
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === "integrations" ? "bg-[#834DFB] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            >
              <Link2 size={14} /> Ecosystem Sync
            </button>
          </div>

          <div className="flex-1 w-full bg-[#1a1625] border border-white/5 rounded-3xl p-6 md:p-8 min-h-[450px]">
            {activeTab === "personal" && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/5">
                  <div className="w-20 h-20 rounded-2xl bg-[#834DFB]/20 border-2 border-[#834DFB] flex items-center justify-center font-black text-2xl text-[#834DFB] uppercase shadow-lg select-none">
                    {personalInfo.nickname.slice(0, 2)}
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-xl font-black text-white tracking-tight">{personalInfo.fullName}</h3>
                    <p className="text-xs text-gray-400 font-medium">Undergraduate Transit Profile &middot; ID: ANCR-240207</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      value={personalInfo.fullName}
                      onChange={(e) => setPersonalInfo({...personalInfo, fullName: e.target.value})}
                      className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Nickname</label>
                    <input
                      type="text"
                      value={personalInfo.nickname}
                      onChange={(e) => setPersonalInfo({...personalInfo, nickname: e.target.value})}
                      className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Mobile Number</label>
                    <input
                      type="text"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                      className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={14} className="text-[#834DFB]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Frequent Spasial Points</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Home Base (Origin)</label>
                      <input
                        type="text"
                        value={personalInfo.homeAddress}
                        onChange={(e) => setPersonalInfo({...personalInfo, homeAddress: e.target.value})}
                        className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Primary Destination (Office/Campus)</label>
                      <input
                        type="text"
                        value={personalInfo.workAddress}
                        onChange={(e) => setPersonalInfo({...personalInfo, workAddress: e.target.value})}
                        className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    onClick={handleSaveProfile}
                    disabled={isSaving}
                    style={{
                      backgroundColor: saveSuccess ? "#22c55e" : isSaving ? "#632bd6" : "#834DFB"
                    }}
                    className="flex items-center gap-2 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-lg cursor-pointer transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed min-w-[180px] justify-center"
                  >
                    {isSaving ? (
                      <>
                        <RefreshCw size={14} className="animate-spin" />
                        <span>Saving changes...</span>
                      </>
                    ) : saveSuccess ? (
                      <>
                        <CheckCircle2 size={14} className="animate-bounce" />
                        <span>Changes Saved!</span>
                      </>
                    ) : (
                      <>
                        <Save size={14} />
                        <span>Save Profile Changes</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "cards" && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-base font-black text-white tracking-tight">Electronic Money Ledger</h3>
                    <p className="text-xs text-gray-400">Kelola nomor NFC kartu fisik untuk pemindaian gate saldo otomatis.</p>
                  </div>
                  <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all">
                    <Plus size={14} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {smartCards.map(card => {
                    const isFlazz = card.type.includes("Flazz");
                    const isEmoney = card.type.includes("e-Money");
                    const cardBg = isFlazz 
                      ? "from-[#1e1b4b] via-[#2e1065] to-[#110c1b]" 
                      : isEmoney 
                        ? "from-[#062f4f] via-[#0b132b] to-[#110c1b]" 
                        : "from-[#14532d] via-[#022c22] to-[#110c1b]";
                    const accentColor = isFlazz ? "#834DFB" : isEmoney ? "#F0E100" : "#22c55e";

                    return (
                      <div 
                        key={card.id} 
                        className={`relative rounded-2xl p-5 bg-gradient-to-br ${cardBg} border border-white/10 flex flex-col justify-between min-h-[190px] shadow-2xl overflow-hidden group transition-all duration-300 hover:border-white/20`}
                      >
                        <div 
                          style={{ background: `linear-gradient(135deg, ${accentColor}10, transparent)` }} 
                          className="absolute inset-0 opacity-40 pointer-events-none" 
                        />
                        
                        <div className="flex justify-between items-start relative z-10 w-full">
                          <div className="space-y-0.5">
                            <span className="text-[9px] font-black tracking-widest text-white/30 uppercase">ANCER SMART CARD</span>
                            <h4 className="text-sm font-black text-white tracking-tight">{card.label}</h4>
                          </div>
                          <div className="flex flex-col items-end gap-1 shrink-0">
                            <span style={{ color: accentColor, borderColor: `${accentColor}30`, background: `${accentColor}15` }} className="px-2 py-0.5 rounded text-[8px] font-black border tracking-wider uppercase">
                              {card.type}
                            </span>
                            {card.isDefault && (
                              <span className="text-[8px] font-black bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 rounded px-1.5 py-0.5 tracking-widest">PRIMARY</span>
                            )}
                          </div>
                        </div>

                        <div className="relative z-10 my-3">
                          <div className="w-7 h-5 bg-amber-500/15 border border-amber-500/25 rounded mb-2 relative overflow-hidden">
                            <div className="absolute inset-y-0 left-1/2 w-px bg-amber-500/20" />
                            <div className="absolute inset-x-0 top-1/2 h-px bg-amber-500/20" />
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-sm tracking-wider text-gray-200 font-bold">
                              {card.cardNumber}
                            </span>
                            <button 
                              onClick={() => handleCopy(card.cardNumber)}
                              className="text-[9px] font-bold text-white/40 hover:text-white transition-colors cursor-pointer shrink-0 bg-white/5 px-1.5 py-0.5 rounded border border-white/5"
                            >
                              {copiedCard === card.cardNumber ? "Copied!" : "Copy"}
                            </button>
                          </div>
                        </div>

                        <div className="pt-2.5 border-t border-white/5 flex justify-between items-center relative z-10 w-full">
                          <div>
                            <div className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Estimated Balance</div>
                            <div className="text-base font-black text-[#F0E100] tracking-tight leading-none mt-0.5">{card.balance}</div>
                          </div>
                          <button className="text-[9px] font-black text-white/70 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-xl border border-white/5 transition-all cursor-pointer">
                            Sync Balance
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "integrations" && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div>
                  <h3 className="text-base font-black text-white tracking-tight">Transit Application Ecosystem</h3>
                  <p className="text-xs text-gray-400">Otomatisasikan penarikan data travel voucher harian lewat sinkronisasi akun resmi operator.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {transitApps.map(app => {
                    const isConnected = app.status === "Connected";
                    return (
                      <div 
                        key={app.id} 
                        style={{ borderColor: isConnected ? "rgba(131, 77, 251, 0.15)" : "rgba(255, 255, 255, 0.05)" }}
                        className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-48 ${isConnected ? "bg-white/[0.02] border-white/10 shadow-sm" : "bg-white/[0.01] border-white/5 opacity-60"}`}
                      >
                        <div className="flex justify-between items-start w-full">
                          <div className="flex items-center gap-3.5 min-w-0">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${isConnected ? "bg-[#834DFB]/10 border-[#834DFB]/20 text-[#834DFB]" : "bg-white/5 border-white/5 text-gray-600"}`}>
                              <Link2 size={15} />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-sm font-black text-white tracking-tight truncate">{app.name}</h4>
                              <p className="text-[10px] font-mono text-gray-400 truncate max-w-[150px] mt-0.5">{isConnected ? app.account : "Disintegrated Account"}</p>
                            </div>
                          </div>
                          
                          <div className={`text-[9px] font-black px-2 py-0.5 rounded-full tracking-wide ${isConnected ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-white/5 text-gray-500 border border-white/5"}`}>
                            {isConnected ? "ACTIVE" : "OFFLINE"}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div>
                            <span className="text-[8px] font-black text-gray-500 uppercase tracking-wider block">Wallet Balance</span>
                            <span className={`text-xl font-black tracking-tight ${isConnected ? "text-white" : "text-gray-600 font-medium text-sm"}`}>
                              {isConnected ? `Rp${app.balance}` : "—"}
                            </span>
                          </div>
                          {isConnected && (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 shadow-sm">
                              <span>Synced</span>
                            </div>
                          )}
                        </div>

                        <div className="pt-4 border-t border-white/5 w-full flex items-center justify-between gap-4">
                          <span className="text-[9px] text-gray-500 font-bold tracking-wide uppercase flex items-center gap-1">
                            {isConnected ? "Auto Voucher Enabled" : "Manual Sync"}
                          </span>
                          <button
                            onClick={() => toggleAppConnect(app.id)}
                            className={`text-[11px] font-black tracking-tight transition-all cursor-pointer flex items-center gap-1 py-1 px-2 rounded-lg ${isConnected ? "text-red-400/80 hover:text-red-400 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10" : "text-[#834DFB] hover:text-[#723ee3]"}`}
                          >
                            <span>{isConnected ? "Disconnect" : "Authorize"}</span>
                            {!isConnected && <ArrowUpRight size={12} />}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}