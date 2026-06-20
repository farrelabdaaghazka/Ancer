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
  Plus
} from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [copiedCard, setCopiedCard] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [showCardModal, setShowCardModal] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);

  const [newCard, setNewCard] = useState({ label: "", type: "Flazz BCA", cardNumber: "", balance: "Rp0" });
  const [newApp, setNewApp] = useState({ name: "", account: "", balance: "0" });

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Farrel Abda Aghazka",
    nickname: "Abda",
    email: "farrelabdaaghazka@gmail.com",
    phone: "+62 812-3456-7890",
    homeAddress: "Kota Tangerang Selatan, Banten",
    workAddress: "Cakrawala University Campus, Jakarta"
  });

  const [transitApps, setTransitApps] = useState([
    { id: "mrt", name: "MyMRT (MRT Jakarta)", status: "Connected", account: "abda@mrt-passenger.id", balance: "Rp45.000" },
    { id: "krl", name: "C-Access (KRL Commuter)", status: "Connected", account: "+6281234567890", balance: "Rp12.000" },
    { id: "lrt", name: "LRT Jabodebek Hub", status: "Disconnected", account: "—", balance: "—" },
    { id: "jaklingko", name: "JakLingko SuperApp", status: "Connected", account: "abda.aghazka@jaklingko.ch", balance: "Rp27.500" }
  ]);

  const [smartCards, setSmartCards] = useState([
    { id: 1, type: "Flazz BCA", cardNumber: "5008-1234-5678-9012", label: "Kartu Komuter Harian", balance: "Rp87.500", isDefault: true },
    { id: 2, type: "e-Money Mandiri", cardNumber: "6032-9876-5432-1098", label: "Cadangan TransJakarta", balance: "Rp14.000", isDefault: false },
    { id: 3, type: "Kartu Multi Trip (KMT)", cardNumber: "1002-4567-8901", label: "Khusus Jalur Bogor Line", balance: "Rp32.000", isDefault: false },
    { id: 4, type: "TapCash BNI", cardNumber: "7542-8891-6302-4551", label: "Koleksi Edisi Spesial MRT", balance: "Rp65.000", isDefault: false }
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
          balance: isConnected ? "—" : "Rp50.000"
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

  const handleAddCard = (e) => {
    e.preventDefault();
    if (!newCard.label || !newCard.cardNumber) return;
    
    setSmartCards([
      ...smartCards,
      {
        id: Date.now(),
        type: newCard.type,
        cardNumber: newCard.cardNumber,
        label: newCard.label,
        balance: newCard.balance.startsWith("Rp") ? newCard.balance : `Rp${newCard.balance}`,
        isDefault: false
      }
    ]);
    setShowCardModal(false);
    setNewCard({ label: "", type: "Flazz BCA", cardNumber: "", balance: "Rp0" });
  };

  const handleAddApp = (e) => {
    e.preventDefault();
    if (!newApp.name || !newApp.account) return;

    setTransitApps([
      ...transitApps,
      {
        id: Date.now().toString(),
        name: newApp.name,
        status: "Connected",
        account: newApp.account,
        balance: newApp.balance.startsWith("Rp") ? newApp.balance : `Rp${newApp.balance}`
      }
    ]);
    setShowAppModal(false);
    setNewApp({ name: "", account: "", balance: "0" });
  };

  return (
    <div className="flex-1 min-h-screen bg-[#110c1b] text-white p-6 md:p-10 overflow-y-auto flex justify-center">
      <div className="w-full max-w-4xl space-y-6">
        
        <div className="text-left">
          <div className="text-[#834DFB] text-[11px] font-bold tracking-[2px] mb-1.5 uppercase">Account Sub-System</div>
          <h1 className="text-3xl font-black text-[#F5F3FF] tracking-tight">My Profile</h1>
        </div>

        <div className="w-full bg-[#1a1625] border border-white/5 rounded-2xl p-1.5 grid grid-cols-3 gap-3 shrink-0 shadow-md">
          <button
            onClick={() => setActiveTab("personal")}
            className={`flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === "personal" ? "bg-[#834DFB] text-white shadow-lg shadow-[#834DFB]/15" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <User size={14} /> Personal Details
          </button>
          <button
            onClick={() => setActiveTab("cards")}
            className={`flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === "cards" ? "bg-[#834DFB] text-white shadow-lg shadow-[#834DFB]/15" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <CreditCard size={14} /> Smart Cards Ledger
          </button>
          <button
            onClick={() => setActiveTab("integrations")}
            className={`flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === "integrations" ? "bg-[#834DFB] text-white shadow-lg shadow-[#834DFB]/15" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Link2 size={14} /> Ecosystem Sync
          </button>
        </div>

        <div className="w-full bg-[#1a1625] border border-white/5 rounded-3xl p-6 md:p-8 min-h-[450px] shadow-xl">
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
                  <p className="text-xs text-gray-400">Manajemen nomor NFC kartu fisik untuk sinkronisasi pelacakan saldo otomatis.</p>
                </div>
                <button 
                  onClick={() => setShowCardModal(true)}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"
                >
                  <Plus size={14} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {smartCards.map(card => {
                  const isFlazz = card.type.includes("Flazz");
                  const isEmoney = card.type.includes("e-Money");
                  const isTapcash = card.type.includes("TapCash");
                  
                  const cardBg = isFlazz 
                    ? "from-[#1e1b4b] via-[#2e1065] to-[#110c1b]" 
                    : isEmoney 
                      ? "from-[#022340] via-[#0b132b] to-[#110c1b]" 
                      : isTapcash
                        ? "from-[#7c2d12] via-[#431407] to-[#110c1b]"
                        : "from-[#064e3b] via-[#022c22] to-[#110c1b]";
                        
                  const accentColor = isFlazz ? "#834DFB" : isEmoney ? "#3B82F6" : isTapcash ? "#f97316" : "#10b981";

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
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-base font-black text-white tracking-tight">Transit Application Ecosystem</h3>
                  <p className="text-xs text-gray-400">Sinkronisasikan akun aplikasi resmi angkutan Jakarta untuk otomasi data travel voucher.</p>
                </div>
                <button 
                  onClick={() => setShowAppModal(true)}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all"
                >
                  <Plus size={14} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {transitApps.map(app => {
                  const isConnected = app.status === "Connected";
                  return (
                    <div 
                      key={app.id} 
                      style={{ borderColor: isConnected ? "rgba(131, 77, 251, 0.2)" : "rgba(255, 255, 255, 0.05)" }}
                      className={`p-5 rounded-2xl border bg-[#110c1b] flex flex-col justify-between min-h-[160px] transition-all duration-300 relative ${isConnected ? "shadow-[0_4px_20px_rgba(131,77,251,0.04)]" : ""}`}
                    >
                      <div className="flex justify-between items-start gap-2 w-full">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center border shrink-0 ${isConnected ? "bg-[#834DFB]/10 border-[#834DFB]/20 text-[#834DFB]" : "bg-white/5 border-white/10 text-gray-500"}`}>
                            <Link2 size={14} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-black text-white tracking-tight truncate whitespace-nowrap">{app.name}</h4>
                            <p className="text-[10px] font-mono text-gray-400 truncate max-w-[140px] mt-0.5">{isConnected ? app.account : "Not Synced"}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className={`w-1.5 h-1.5 rounded-full ${isConnected ? "bg-[#22c55e]" : "bg-gray-500"}`} />
                          <span className={`text-[9px] font-black tracking-wide ${isConnected ? "text-[#22c55e]" : "text-gray-500"} uppercase`}>
                            {app.status}
                          </span>
                        </div>
                      </div>

                      <div className="my-3 flex items-center h-6">
                        {isConnected ? (
                          <div className="flex items-baseline gap-1.5 bg-[#834DFB]/5 border border-[#834DFB]/10 rounded-xl px-2.5 py-1">
                            <span className="text-xs font-black text-[#F0E100]">{app.balance}</span>
                            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Digital Wallet</span>
                          </div>
                        ) : (
                          <span className="text-[10px] text-gray-500 italic font-medium pl-1">Awaiting authorization…</span>
                        )}
                      </div>

                      <div className="pt-2.5 border-t border-white/5 w-full">
                        <button
                          onClick={() => toggleAppConnect(app.id)}
                          className={`w-full py-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer text-center ${isConnected ? "bg-white/5 border-white/10 text-red-400 hover:bg-red-500/10 hover:border-red-500/20" : "bg-[#834DFB] border-transparent text-white hover:bg-[#723ee3]"}`}
                        >
                          {isConnected ? "Disconnect Account" : "Authorize Connection"}
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

      {showCardModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1625] border border-white/10 rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl animate-fadeIn text-left">
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <h4 className="text-base font-black text-white">Add Smart Card</h4>
              <button onClick={() => setShowCardModal(false)} className="text-gray-400 hover:text-white text-sm font-bold cursor-pointer">✕</button>
            </div>
            <form onSubmit={handleAddCard} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Card Custom Label</label>
                <input 
                  type="text" required placeholder="e.g., Kartu Utama MRT"
                  value={newCard.label} onChange={(e) => setNewCard({...newCard, label: e.target.value})}
                  className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Card Provider Vendor</label>
                <select 
                  value={newCard.type} onChange={(e) => setNewCard({...newCard, type: e.target.value})}
                  className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB]"
                >
                  <option value="Flazz BCA">Flazz BCA</option>
                  <option value="e-Money Mandiri">e-Money Mandiri</option>
                  <option value="Kartu Multi Trip (KMT)">Kartu Multi Trip (KMT)</option>
                  <option value="TapCash BNI">TapCash BNI</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">16-Digit Card Number</label>
                <input 
                  type="text" required placeholder="XXXX-XXXX-XXXX-XXXX"
                  value={newCard.cardNumber} onChange={(e) => setNewCard({...newCard, cardNumber: e.target.value})}
                  className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-mono tracking-wider text-white focus:outline-none focus:border-[#834DFB]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Initial Balance (IDR)</label>
                <input 
                  type="text" placeholder="e.g., 50000"
                  value={newCard.balance} onChange={(e) => setNewCard({...newCard, balance: e.target.value})}
                  className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB]"
                />
              </div>
              <button type="submit" className="w-full bg-[#834DFB] hover:bg-[#723ee3] text-white text-xs font-bold py-3 rounded-xl shadow-lg transition-colors cursor-pointer mt-2">
                Inject Smart Card
              </button>
            </form>
          </div>
        </div>
      )}

      {showAppModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1625] border border-white/10 rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl animate-fadeIn text-left">
            <div className="fixed justify-between items-center pb-2 border-b border-white/5">
              <h4 className="text-base font-black text-white">Authorize New Application Sync</h4>
              <button onClick={() => setShowAppModal(false)} className="text-gray-400 hover:text-white text-sm font-bold cursor-pointer">✕</button>
            </div>
            <form onSubmit={handleAddApp} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Application Name</label>
                <input 
                  type="text" required placeholder="e.g., KAI Access, Grab, Gojek"
                  value={newApp.name} onChange={(e) => setNewApp({...newApp, name: e.target.value})}
                  className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">User Account / ID</label>
                <input 
                  type="text" required placeholder="Email or Phone Number registered"
                  value={newApp.account} onChange={(e) => setNewApp({...newApp, account: e.target.value})}
                  className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Current Wallet Balance</label>
                <input 
                  type="text" placeholder="e.g., 25000"
                  value={newApp.balance} onChange={(e) => setNewApp({...newApp, balance: e.target.value})}
                  className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB]"
                />
              </div>
              <button type="submit" className="w-full bg-[#834DFB] hover:bg-[#723ee3] text-white text-xs font-bold py-3 rounded-xl shadow-lg transition-colors cursor-pointer mt-2">
                Establish Ecosystem Authorization
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}