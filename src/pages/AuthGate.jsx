import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthLayoutSide from "../components/AuthLayoutSide"; // <-- Import komponen barumu

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses autentikasi di sini, lalu arahkan ke dashboard
    navigate("/dashboard");
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row text-white bg-[#0C051F] overflow-hidden">

      {/* LEFT SECTION */}
      <div className="hidden lg:block lg:w-[60%]">
        <AuthLayoutSide />
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-[40%] bg-[#140827] flex items-start justify-center px-8 xl:px-12 py-10 overflow-y-auto">
        <div className="w-full max-w-md">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="text-zinc-500 hover:text-white transition mb-12 text-left"
          >
            ← Back to home
          </button>

          {/* HEADING */}
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4">
            Welcome back
          </h1>
          <p className="text-zinc-400 text-lg xl:text-xl mb-12">
            Sign in to your ANCER account
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* EMAIL */}
            <div>
              <label className="block uppercase tracking-wider text-zinc-300 font-semibold mb-4">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="commuter@example.com"
                className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-5 text-lg outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block uppercase tracking-wider text-zinc-300 font-semibold mb-4">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-5 text-lg outline-none focus:ring-2 focus:ring-violet-500"
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

            {/* OPTIONS */}
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-3 text-zinc-400 cursor-pointer select-none">
                <input type="checkbox" className="w-5 h-5 rounded" />
                Remember me
              </label>
              <a href="#" className="text-violet-400 hover:text-violet-300">
                Forgot password?
              </a>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-5 rounded-3xl font-bold text-lg bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-90 transition"
            >
              Authenticate →
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-center text-zinc-400 mt-10">
            New to ANCER?
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-violet-400 font-semibold ml-1 hover:underline bg-transparent border-none cursor-pointer"
            >
              Create Account
            </button>
          </p>

        </div>
      </div>

    </div>
  );
}