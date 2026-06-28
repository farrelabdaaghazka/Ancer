import { useState } from "react";
import { Plus } from "lucide-react";
import ProfileTabs from "../components/ProfileTabs";
import PersonalInfoForm from "../components/PersonalInfoForm";
import IntegrationCard from "../components/IntegrationCard";
import SmartCard from "../components/SmartCard";

const PROFILE_TABS = [
  { id: "personal", label: "Personal Info" },
  { id: "cards", label: "Smart Cards" },
  { id: "integrations", label: "Integrations" }
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
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
    { id: "mrt", name: "MyMRT Jakarta", status: "Connected", account: "abda@mrt-passenger.id", balance: "Rp45.000" },
    { id: "krl", name: "C-Access KRL", status: "Connected", account: "+6281234567890", balance: "Rp12.500" },
    { id: "lrt", name: "LRT Jabodebek Hub", status: "Disconnected", account: "—", balance: "Rp0" },
    { id: "jaklingko", name: "JakLingko SuperApp", status: "Connected", account: "abda.aghazka@jaklingko.ch", balance: "Rp27.500" }
  ]);

  const [smartCards, setSmartCards] = useState([
    { id: 1, type: "Flazz BCA", cardNumber: "5008-1234-5678-9012", label: "Kartu Komuter Harian", balance: "Rp87.500", isDefault: true },
    { id: 2, type: "e-Money Mandiri", cardNumber: "6032-9876-5432-1098", label: "Cadangan TransJakarta", balance: "Rp14.000", isDefault: false },
    { id: 3, type: "Kartu Multi Trip (KMT)", cardNumber: "1002-4567-8901", label: "Khusus Jalur Bogor Line", balance: "Rp32.000", isDefault: false },
    { id: 4, type: "TapCash BNI", cardNumber: "7542-8891-6302-4551", label: "Koleksi Edisi Spesial MRT", balance: "Rp65.000", isDefault: false }
  ]);

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
    setTransitApps(prev => prev.map(app => {
      if (app.id === id) {
        const isConnected = app.status === "Connected";
        return {
          ...app,
          status: isConnected ? "Disconnected" : "Connected",
          account: isConnected ? "—" : "abda.sync@ancer.id",
          balance: isConnected ? "Rp0" : "Rp50.000"
        };
      }
      return app;
    }));
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
          <ProfileTabs 
            tabs={PROFILE_TABS} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        </div>

        {/* MAIN DISPLAY BOX */}
        <div className="w-full bg-[#1a1625] border border-white/5 rounded-3xl p-6 md:p-8 min-h-[450px]">
          {activeTab === "personal" && (
            <PersonalInfoForm 
              info={personalInfo}
              setInfo={setPersonalInfo}
              isSaving={isSaving}
              saveSuccess={saveSuccess}
              onSave={handleSaveInfo}
            />
          )}

          {activeTab === "cards" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-base font-black text-white tracking-tight">Electronic Money Ledger</h3>
                  <p className="text-xs text-gray-400">Kelola nomor NFC kartu fisik untuk pemindaian gate saldo otomatis.</p>
                </div>
                <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all">
                  <Plus size={14} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {smartCards.map(card => (
                  <SmartCard 
                    key={card.id}
                    card={card}
                    copiedCard={copiedCard}
                    onCopy={handleCopy}
                  />
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
                  <IntegrationCard 
                    key={app.id}
                    app={app}
                    onToggleConnect={toggleAppConnect}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}