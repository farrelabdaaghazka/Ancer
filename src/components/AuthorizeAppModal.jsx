export default function AuthorizeAppModal({ app, onClose, onSubmit, form, setForm }) {
  if (!app) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn p-4">
      <div className="bg-[#1a1625]/95 border border-white/10 p-6 rounded-2xl w-full max-w-md space-y-5 shadow-2xl text-left">
        <div>
          <div className="inline-block px-2.5 py-1 rounded-md bg-[#834DFB]/10 border border-[#834DFB]/20 text-[#834DFB] text-[10px] font-bold uppercase tracking-wider mb-2">
            Secure API Handshake
          </div>
          <h3 className="text-lg font-black text-white tracking-tight">Authorize {app.name}</h3>
          <p className="text-xs text-gray-400 mt-0.5">Hubungkan kredensial akun platform multi-modal ke dalam pusat sistem ANCER.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              {app.id === "krl" ? "Registered Phone Number" : "Connected Account ID / Email"}
            </label>
            <input
              type="text"
              required
              placeholder={app.id === "krl" ? "e.g., +62 812-xxxx-xxxx" : "e.g., user@transit-passenger.id"}
              value={form.account}
              onChange={(e) => setForm({...form, account: e.target.value})}
              className="w-full bg-[#110c1b] border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Current Account Balance</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-sm font-bold text-gray-500">Rp</span>
              <input
                type="text"
                required
                placeholder="e.g., 50.000"
                value={form.balance}
                onChange={(e) => setForm({...form, balance: e.target.value.replace(/\D/g, "")})}
                className="w-full bg-[#110c1b] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#834DFB] transition-colors"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/5 text-xs font-bold text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#834DFB] hover:bg-[#723ee3] text-xs font-bold text-white shadow-lg transition-colors cursor-pointer"
            >
              Confirm Authorization
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}