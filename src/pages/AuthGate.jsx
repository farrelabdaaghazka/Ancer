import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ancerLogo from "../assets/logo/ancer logo.png";

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
    <div className="min-h-screen flex flex-col lg:flex-row text-white bg-[#0C051F]">

        {/* LEFT SECTION */}
        <div
            class="hidden lg:flex lg:w-[60%] relative border-r border-white/10 overflow-hidden"
        >

            {/* GRID */}
            <div
                class="absolute inset-0 opacity-30"
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
                class="absolute w-[700px] h-[700px] rounded-full bg-violet-700/20 blur-[180px]
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            ></div>

            {/* GRAPH */}
            <svg
                class="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 800"
                preserveAspectRatio="none"
            >

                <polyline
                    points="120,780 260,600 420,440 650,240 920,40"
                    fill="none"
                    stroke="#7C3AED"
                    stroke-width="3"
                />

                <polyline
                    points="0,520 530,450 1000,360"
                    fill="none"
                    stroke="#B89A00"
                    stroke-width="2"
                    opacity="0.7"
                />

                <polyline
                    points="180,720 390,430 760,150"
                    fill="none"
                    stroke="#B89A00"
                    stroke-width="2"
                    opacity="0.5"
                />

                <polyline
                    points="0,680 700,590 1000,540"
                    fill="none"
                    stroke="#00A87D"
                    stroke-width="2"
                    opacity="0.5"
                />

            </svg>

            {/* GLOW POINTS */}
            <div class="absolute top-[74%] left-[28%]">
                <div class="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
            </div>

            <div class="absolute top-[54%] left-[43%]">
                <div class="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
            </div>

            <div class="absolute top-[37%] left-[66%]">
                <div class="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
            </div>

            <div class="absolute top-[10%] left-[82%]">
                <div class="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_25px_#7C3AED]"></div>
            </div>

            {/* CONTENT */}
            <div
                class="relative z-10 flex flex-col justify-center px-10 xl:px-16 2xl:px-24 py-12"
            >

                {/* LOGO */}
                <div className="flex items-center gap-2 mb-10">
                    <img 
                        src={ancerLogo} 
                        alt="Ancer Logo" 
                        className="w-14 h-14 object-contain" 
                    />

                    <h1 className="font-black text-3xl xl:text-4xl tracking-tight">
                        ANCER
                    </h1>
                </div>

                {/* TITLE */}
                <h2
                    class="font-extrabold
                    text-5xl
                    xl:text-6xl
                    2xl:text-7xl
                    leading-tight
                    max-w-[700px]"
                >
                    Empowering urban travelers with civic transparency.
                </h2>

                <p
                    class="mt-6 text-zinc-400
                    text-lg xl:text-xl
                    max-w-[650px]"
                >
                    Real-time transit intelligence for the modern Jakarta commuter.
                </p>

                {/* FEATURES */}
                <div class="flex flex-wrap gap-4 mt-10">

                    <div
                        class="px-6 py-4 rounded-2xl
                        border border-white/10
                        bg-white/5 backdrop-blur-md"
                    >
                        🚆 MRT + KRL + TransJakarta
                    </div>

                    <div
                        class="px-6 py-4 rounded-2xl
                        border border-white/10
                        bg-white/5 backdrop-blur-md"
                    >
                        🔒 Secure & Private
                    </div>

                </div>

            </div>

        </div>

        {/* RIGHT SECTION */}
        <div
            class="w-full lg:w-[40%]
            bg-[#140827]
            flex items-center justify-center
            px-8 xl:px-12
            py-10
            overflow-y-auto"
        >

            <div class="w-full max-w-md">

                {/* BACK */}
                <button
                    onClick={() => navigate("/")}
                    class="text-zinc-500 hover:text-white transition mb-12 text-left"
                >
                    ← Back to home
                </button>

                {/* HEADING */}
                <h1
                    class="text-4xl xl:text-5xl 2xl:text-6xl
                    font-bold mb-4"
                >
                    Welcome back
                </h1>

                <p
                    class="text-zinc-400
                    text-lg xl:text-xl
                    mb-12"
                >
                    Sign in to your ANCER account
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} class="space-y-8">

                    {/* EMAIL */}
                    <div>

                        <label
                            class="block uppercase tracking-wider
                            text-zinc-300 font-semibold mb-4"
                        >
                            Email Address
                        </label>

                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="commuter@example.com"
                            class="w-full
                            bg-[#24113F]
                            border border-white/10
                            rounded-3xl
                            px-6 py-5
                            text-lg
                            outline-none
                            focus:ring-2
                            focus:ring-violet-500"
                        />

                    </div>

                    {/* PASSWORD */}
                    <div>

                        <label
                            class="block uppercase tracking-wider
                            text-zinc-300 font-semibold mb-4"
                        >
                            Password
                        </label>

                        <div class="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••"
                                class="w-full
                                bg-[#24113F]
                                border border-white/10
                                rounded-3xl
                                px-6 py-5
                                text-lg
                                outline-none
                                focus:ring-2
                                focus:ring-violet-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                class="absolute right-6 top-1/2
                                -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition"
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>

                        </div>

                    </div>

                    {/* OPTIONS */}
                    <div class="flex justify-between items-center">

                        <label
                            class="flex items-center gap-3 text-zinc-400 cursor-pointer select-none"
                        >

                            <input
                                type="checkbox"
                                class="w-5 h-5 rounded"
                            />

                            Remember me

                        </label>

                        <a
                            href="#"
                            class="text-violet-400 hover:text-violet-300"
                        >
                            Forgot password?
                        </a>

                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        class="w-full
                        py-5
                        rounded-3xl
                        font-bold
                        text-lg
                        bg-gradient-to-r
                        from-[#7C3AED]
                        to-[#A855F7]
                        hover:opacity-90
                        transition"
                    >
                        Authenticate →
                    </button>

                </form>

                {/* FOOTER */}
                <p class="text-center text-zinc-400 mt-10">
                    New to ANCER?
                    <button
                        type="button"
                        onClick={() => navigate("/register")} // <-- Arahkan dengan benar ke /register
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