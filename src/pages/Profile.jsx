import { useState } from "react";
import { Plus } from "lucide-react";
import ProfileTabs from "../components/ProfileTabs";
import PersonalInfoForm from "../components/PersonalInfoForm";
import IntegrationCard from "../components/IntegrationCard";
import SmartCard from "../components/SmartCard";
import { PROFILE_TABS, initialPersonalInfo, initialTransitApps, initialSmartCards } from "../data/profileData";
import AuthorizeAppModal from "../components/AuthorizeAppModal";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [copiedCard, setCopiedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [appToConnect, setAppToConnect] = useState(null);
  const [connectionForm, setConnectionForm] = useState({ account: "", balance: "" });

  const [newCard, setNewCard] = useState({ type: "Flazz BCA", cardNumber: "", label: "", balance: "Rp0", isDefault: false });
  
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [transitApps, setTransitApps] = useState(initialTransitApps);
  const [smartCards, setSmartCards] = useState(initialSmartCards);

  const handleSaveInfo = () => {
    setIsSaving(true);
    setSaveSuccess(false);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1200);
  };

  const handleCopy = (num) => {
    navigator.clipboard.writeText(num.replace(/-/g, ""));
    setCopiedCard(num);
    setTimeout(() => setCopiedCard(null), 2000);
  };

  const toggleAppConnect = (id) => {
    const targetApp = transitApps.find(app => app.id === id);
    if (!targetApp) return;

    if (targetApp.status === "Connected") {
      setTransitApps(prev => prev.map(app => 
        app.id === id ? { ...app, status: "Disconnected", account: "—", balance: "Rp0" } : app
      ));
    } else {
      setAppToConnect(targetApp);
      setConnectionForm({ account: id === "krl" ? "+62 " : "", balance: "" });
    }
  };

  const handleConfirmConnection = (e) => {
    e.preventDefault();
    if (!appToConnect || !connectionForm.account) return;

    setTransitApps(prev => prev.map(app => {
      if (app.id === appToConnect.id) {
        const rawBalance = connectionForm.balance || "0";
        const formattedBalance = rawBalance.startsWith("Rp") 
          ? rawBalance 
          : `Rp${Number(rawBalance.replace(/\D/g, "")).toLocaleString("id-ID")}`;

        return { ...app, status: "Connected", account: connectionForm.account, balance: formattedBalance };
      }
      return app;
    }));
    setAppToConnect(null); 
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    if (!newCard.label || !newCard.cardNumber) return;

    const cardToAdd = {
      id: smartCards.length + 1,
      ...newCard,
      balance: newCard.balance.startsWith("Rp") ? newCard.balance : `Rp${newCard.balance}`
    };

    setSmartCards([...smartCards, cardToAdd]);
    setIsModalOpen(false); 
    setNewCard({ type: "Flazz BCA", cardNumber: "", label: "", balance: "Rp0", isDefault: false });
  };

  return (
    <div className="flex-1 min-h-screen bg-[#110c1b] text-white overflow-y-auto p-6 md:p-10 text-left">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* HEADER SECTION */}
        <div className="shrink-0">
          <div className="text-[#834DFB] text-[10px] md:text-[11px] font-bold tracking-[2px] mb-1 uppercase">Module E</div>
          <h1 className="text-2xl md:text-3xl font-black text-[#F5F3FF] tracking-tight">Identity Center</h1>
        </div>

        {/* PROFILE NAVIGATION TABS */}
        <div className="shrink-0 relative z-20">
          <ProfileTabs tabs={PROFILE_TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* MAIN DISPLAY BOX */}
        <div className="w-full bg-[#1a1625] border border-white/5 rounded-3xl p-6 md:p-8 min-h-[450px]">
          {activeTab === "personal" && (
            <PersonalInfoForm info={personalInfo} setInfo={setPersonalInfo} isSaving={isSaving} saveSuccess={saveSuccess} onSave={handleSaveInfo} />
          )}

          {activeTab === "cards" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-base font-black text-white tracking-tight">Electronic Money Ledger</h3>
                  <p className="text-xs text-gray-400">Kelola nomor NFC kartu fisik untuk pemindaian gate saldo otomatis.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer hover:bg-[#834DFB] hover:border-transparent transition-all"
                >
                  <Plus size={14} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {smartCards.map(card => (
                  <SmartCard key={card.id} card={card} copiedCard={copiedCard} onCopy={handleCopy} />
                ))}
              </div>
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-base font-black text-white tracking-tight">Ecosystem Connections</h3>
                <p className="text-xs text-gray-400">Authorize access API keys for multi-modal operator platforms.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {transitApps.map(app => (
                  <IntegrationCard key={app.id} app={app} onToggleConnect={toggleAppConnect} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn p-4">
          <div className="bg-[#1a1625]/95 border border-white/10 p-6 rounded-2xl w-full max-w-md space-y-5 shadow-2xl text-left">
            <div>
              <h3 className="text-lg font-black text-white tracking-tight">Add New Smart Card</h3>
              <p className="text-xs text-gray-400 mt-0.5">Daftarkan kartu fisik baru ke sistem sinkronisasi ANCER.</p>
            </div>

            <form onSubmit={handleAddCard} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Card Label / Alias</label>
                <input
                  type="text"
                  placeholder="e.g., Kartu Utama MRT, Cadangan TransJakarta"
                  required
                  value={newCard.label}
                  onChange={(e) => setNewCard({...newCard, label: e.target.value})}
                  className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Card Type</label>
                  <select
                    value={newCard.type}
                    onChange={(e) => setNewCard({...newCard, type: e.target.value})}
                    className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-3 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors cursor-pointer"
                  >
                    <option value="Flazz BCA">Flazz BCA</option>
                    <option value="e-Money Mandiri">e-Money Mandiri</option>
                    <option value="Kartu Multi Trip (KMT)">KMT Commuter</option>
                    <option value="TapCash BNI">TapCash BNI</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Initial Balance</label>
                  <input
                    type="text"
                    placeholder="e.g., 50.000"
                    value={newCard.balance}
                    onChange={(e) => setNewCard({...newCard, balance: e.target.value})}
                    className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Card Number (16 Digits)</label>
                <input
                  type="text"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  maxLength="19"
                  required
                  value={newCard.cardNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").match(/.{1,4}/g)?.join("-") || "";
                    setNewCard({...newCard, cardNumber: val});
                  }}
                  className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 font-mono text-sm font-bold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/5 text-xs font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">Cancel</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-[#834DFB] hover:bg-[#723ee3] text-xs font-bold text-white shadow-lg transition-colors cursor-pointer">Register Card</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <AuthorizeAppModal 
        app={appToConnect} 
        onClose={() => setAppToConnect(null)} 
        onSubmit={handleConfirmConnection} 
        form={connectionForm} 
        setForm={setConnectionForm} 
      />
    </div>
  );
}