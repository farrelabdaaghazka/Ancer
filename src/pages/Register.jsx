import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    // Validasi apakah password dan isi ulang password sudah cocok
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok!");
      return;
    }

    console.log("Mendaftarkan user...", { name, email, password });
    
    // Setelah sukses, arahkan ke halaman login
    setTimeout(() => {
    navigate("/login");
  }, 1000); // delay 1 detik sebelum lempar ke login
};
  return (
    <div className="min-h-screen flex flex-col lg:flex-row text-white bg-[#0C051F]">

        {/* LEFT SECTION */}
        <div
            className="hidden lg:flex lg:w-[60%] relative border-r border-white/10 overflow-hidden"
        >

            {/* GRID */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px"
                }}
            ></div>

            {/* PURPLE GLOW */}
            <div
                className="absolute w-[700px] h-[700px] rounded-full bg-violet-700/20 blur-[180px]
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            ></div>

            {/* GRAPH */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 800"
                preserveAspectRatio="none"
            >
                <polyline
                    points="120,780 260,600 420,440 650,240 920,40"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="3"
                />
                <polyline
                    points="0,520 530,450 1000,360"
                    fill="none"
                    stroke="#B89A00"
                    strokeWidth="2"
                    opacity="0.7"
                />
                <polyline
                    points="180,720 390,430 760,150"
                    fill="none"
                    stroke="#B89A00"
                    strokeWidth="2"
                    opacity="0.5"
                />
                <polyline
                    points="0,680 700,590 1000,540"
                    fill="none"
                    stroke="#00A87D"
                    strokeWidth="2"
                    opacity="0.5"
                />
            </svg>

            {/* GLOW POINTS */}
            <div className="absolute top-[74%] left-[28%]">
                <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
            </div>
            <div className="absolute top-[54%] left-[43%]">
                <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
            </div>
            <div className="absolute top-[37%] left-[66%]">
                <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
            </div>
            <div className="absolute top-[10%] left-[82%]">
                <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
            </div>

            {/* CONTENT */}
            <div
                className="relative z-10 flex flex-col justify-center px-10 xl:px-16 2xl:px-24 py-12"
            >
                {/* LOGO */}
                <div className="flex items-center gap-5 mb-10">
                    <div
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br
                        from-violet-500 to-purple-700
                        flex items-center justify-center
                        shadow-lg shadow-violet-500/30"
                    >
                        <span className="text-2xl">⚡</span>
                    </div>
                    <h1 className="font-bold text-3xl xl:text-4xl">
                        ANCER
                    </h1>
                </div>

                {/* TITLE */}
                <h2
                    className="font-extrabold text-5xl xl:text-6xl 2xl:text-7xl leading-tight max-w-[700px]"
                >
                    Empowering urban travelers with civic transparency.
                </h2>
                <p
                    className="mt-6 text-zinc-400 text-lg xl:text-xl max-w-[650px]"
                >
                    Real-time transit intelligence for the modern Jakarta commuter.
                </p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-4 mt-10">
                    <div
                        className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        🚆 MRT + KRL + TransJakarta
                    </div>
                    <div
                        className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        🔒 Secure & Private
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT SECTION */}
        <div
            className="w-full lg:w-[40%] bg-[#140827] flex items-center justify-center px-8 xl:px-12 py-10 overflow-y-auto"
        >
            <div className="w-full max-w-md">

                {/* BACK */}
                <button
                    onClick={() => navigate("/")}
                    className="text-zinc-500 hover:text-white transition mb-6 text-left"
                >
                    ← Back to home
                </button>

                {/* HEADING */}
                <h1 className="text-4xl font-bold mb-2">
                    Get started
                </h1>
                <p className="text-zinc-400 text-base mb-6">
                    Create your ANCER account to explore transit intelligence
                </p>

                {/* ERROR MESSAGE */}
                {error && (
                    <div className="p-4 mb-4 text-sm text-red-400 bg-red-950/40 border border-red-500/30 rounded-2xl">
                        ⚠️ {error}
                    </div>
                )}

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* FULL NAME */}
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
                            className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-3.5 text-base outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>

                    {/* EMAIL */}
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
                            className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-3.5 text-base outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>

                    {/* PASSWORD */}
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
                                className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-3.5 text-base outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition"
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>
                        </div>
                    </div>

                    {/* CONFIRM PASSWORD */}
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
                                className="w-full bg-[#24113F] border border-white/10 rounded-3xl px-6 py-3.5 text-base outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                    </div>

                    {/* TERMS AGREEMENT */}
                    <div className="flex items-start gap-3 pt-1">
                        <label className="flex items-center gap-3 text-zinc-400 cursor-pointer select-none text-xs leading-relaxed">
                            <input
                                type="checkbox"
                                required
                                className="w-4 h-4 rounded mt-0.5"
                            />
                            I agree to the Terms of Service and Privacy Policy
                        </label>
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full py-4.5 rounded-3xl font-bold text-base bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-90 transition mt-2"
                    >
                        Register →
                    </button>

                </form>

                {/* FOOTER */}
                <p className="text-center text-zinc-400 text-sm mt-6">
                    Already have an account?
                    <button
                        onClick={() => navigate("/login")}
                        className="text-violet-400 font-semibold ml-1 hover:underline"
                    >
                        Sign In
                    </button>
                </p>

            </div>
        </div>

    </div>
  );
}