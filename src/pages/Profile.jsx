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
          balance: isConnected ? "—" : "Rp50.000"
        };
      }
      return app;
    }));
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
              <CreditCard size={14} /> Smart Cards & Payment
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === "integrations" ? "bg-[#834DFB] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            >
              <Link2 size={14} /> Transit App Sync
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
                  <button className="flex items-center gap-2 bg-[#834DFB] hover:bg-[#723ee3] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-lg cursor-pointer transition-all">
                    <Save size={14} /> Save Profile Changes
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
                  {smartCards.map(card => (
                    <div key={card.id} className="bg-[#110c1b] border border-white/5 rounded-2xl p-5 flex flex-col justify-between space-y-4 relative overflow-hidden group shadow-md">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 rounded-full translate-x-8 -translate-y-8 pointer-events-none" />
                      
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="px-2 py-0.5 rounded text-[9px] font-extrabold bg-white/10 text-white tracking-wide border border-white/5 uppercase">{card.type}</span>
                          <h4 className="text-sm font-black text-gray-200 mt-2 tracking-tight">{card.label}</h4>
                        </div>
                        {card.isDefault && (
                          <span className="text-[9px] font-black bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20 rounded px-2 py-0.5 tracking-wide">PRIMARY</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Card Number</div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm tracking-widest text-gray-300 font-bold">{card.cardNumber}</span>
                          <button 
                            onClick={() => handleCopy(card.cardNumber)}
                            className="text-[10px] font-bold text-[#834DFB] hover:text-white transition-colors cursor-pointer"
                          >
                            {copiedCard === card.cardNumber ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex justify-between items-end">
                        <div>
                          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Estimated Balance</div>
                          <div className="text-base font-black text-[#F0E100]">{card.balance}</div>
                        </div>
                        <button className="text-[10px] font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">
                          Sync Balance
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "integrations" && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div>
                  <h3 className="text-base font-black text-white tracking-tight">Transit Application Ecosystem</h3>
                  <p className="text-xs text-gray-400">Sinkronisasikan akun aplikasi resmi angkutan Jakarta untuk otomasi data travel voucher.</p>
                </div>

                <div className="divide-y divide-white/5 bg-[#110c1b] border border-white/5 rounded-2xl overflow-hidden shadow-md">
                  {transitApps.map(app => {
                    const isConnected = app.status === "Connected";
                    return (
                      <div key={app.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:bg-white/2">
                        <div className="flex items-start gap-4">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${isConnected ? "bg-[#834DFB]/10 border-[#834DFB]/20 text-[#834DFB]" : "bg-white/5 border-white/10 text-gray-500"}`}>
                            <Link2 size={16} />
                          </div>
                          <div className="space-y-0.5">
                            <h4 className="text-sm font-black text-white tracking-tight">{app.name}</h4>
                            <div className="text-xs text-gray-400 font-semibold flex items-center gap-2">
                              <span>Account: {app.account}</span>
                              {isConnected && (
                                <>
                                  <span className="text-gray-600">&bull;</span>
                                  <span className="text-[#F0E100] font-black">{app.balance} Wallet</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 justify-between sm:justify-end">
                          <div className="flex items-center gap-1.5">
                            {isConnected ? (
                              <CheckCircle2 size={14} className="text-[#22c55e]" />
                            ) : (
                              <XCircle size={14} className="text-gray-500" />
                            )}
                            <span className={`text-xs font-bold ${isConnected ? "text-[#22c55e]" : "text-gray-500"}`}>
                              {app.status}
                            </span>
                          </div>

                          <button
                            onClick={() => toggleAppConnect(app.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${isConnected ? "bg-white/5 border-white/10 text-red-400 hover:bg-red-500/10 hover:border-red-500/20" : "bg-[#834DFB] border-transparent text-white hover:bg-[#723ee3]"}`}
                          >
                            {isConnected ? "Disconnect" : "Connect"}
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