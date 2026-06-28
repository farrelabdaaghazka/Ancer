import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayoutSide from "../components/AuthLayoutSide"; 

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validasi kecocokan password
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok!");
      return;
    }

    // Objek data user yang didaftarkan
    const userData = { name, email, password };

    // Log notifikasi sistem biasa di konsol
    console.log("Registration data captured:");
    console.dir(userData); 

    // Simulasi sukses dan arahkan ke halaman login
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row text-white bg-[#0C051F] overflow-hidden">
      {/* SEBELAH KIRI: Komponen Side */}
      <div className="w-full lg:w-[60%] h-full hidden lg:block">
        <AuthLayoutSide />
      </div>

      {/* SEBELAH KANAN: Form Menu Registrasi */}
      <div className="w-full lg:w-[40%] bg-[#140827] flex items-start justify-center px-8 xl:px-12 py-12 overflow-y-auto">
        <div className="w-full max-w-md">

          {/* TOMBOL KEMBALI */}
          <button
            onClick={() => navigate("/")}
            className="text-zinc-500 hover:text-white transition mb-6 text-left text-sm font-medium"
          >
            ← Back to home
          </button>

          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4">
            Get started
          </h1>

          <p className="text-zinc-400 text-lg xl:text-xl mb-12">
            Create your account to access ANCER
          </p>

          {/* NOTIFIKASI ERROR */}
          {error && (
            <div className="p-4 mb-4 text-sm text-red-400 bg-red-950/40 border border-red-500/30 rounded-2xl animate-fade-in">
              ⚠️ {error}
            </div>
          )}

          {/* FORM PENDAFTARAN */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* INPUT NAMA LENGKAP */}
            <div>
              <label className="block uppercase tracking-wider text-zinc-300 font-semibold mb-2 text-xs">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-3.5 text-base outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200 text-white placeholder-zinc-600"
              />
            </div>

            {/* INPUT EMAIL */}
            <div>
              <label className="block uppercase tracking-wider text-zinc-300 font-semibold mb-2 text-xs">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="commuter@example.com"
                className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-3.5 text-base outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200 text-white placeholder-zinc-600"
              />
            </div>

            {/* INPUT PASSWORD */}
            <div>
              <label className="block uppercase tracking-wider text-zinc-300 font-semibold mb-2 text-xs">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-3.5 text-base outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200 text-white placeholder-zinc-600 pr-14"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                      <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                      <line x1="2" y1="2" x2="22" y2="22"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* MASUKKAN KONFIRMASI PASSWORD */}
            <div>
              <label className="block uppercase tracking-wider text-zinc-300 font-semibold mb-2 text-xs">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-3.5 text-base outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200 text-white placeholder-zinc-600"
                />
              </div>
            </div>

            {/* PERSETUJUAN LAYANAN */}
            <div className="flex items-start gap-3 pt-1">
              <label className="flex items-center gap-3 text-zinc-400 cursor-pointer select-none text-xs leading-relaxed">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded mt-0.5 accent-violet-600"
                />
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            {/* TOMBOL UTAMA (Sama Persis dengan Tombol Sign In Login) */}
            <button
              type="submit"
              className="w-full py-5 rounded-3xl font-bold text-lg text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:opacity-95 hover:scale-[1.01] transition-all duration-200 shadow-lg shadow-purple-500/30 mt-2"
            >
              Register →
            </button>
          </form>

          {/* LINK KE LOGIN */}
          <p className="text-center text-zinc-400 text-sm mt-6">
            Already have an account?
            <button
              onClick={() => navigate("/login")}
              className="text-violet-400 font-semibold ml-1 hover:underline focus:outline-none"
            >
              Sign In
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}