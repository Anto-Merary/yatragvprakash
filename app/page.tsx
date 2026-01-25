"use client";

import { useEffect, useState } from "react";
import AudioManager from "@/components/AudioManager";
import Preloader from "@/components/Preloader";
import Scanline from "@/components/Scanline";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import Biography from "@/components/Biography";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <Navbar />

      <div className="letterbox-bar letterbox-top flex items-center justify-between px-8 text-[10px] text-gray-500 font-mono uppercase tracking-widest z-50 pointer-events-none">
        <span>SYS.SEQ // 001</span>
        <span>REC_MODE</span>
      </div>
      <div className="letterbox-bar letterbox-bottom flex items-center justify-between px-8 text-[10px] text-gray-500 font-mono uppercase tracking-widest z-50 pointer-events-none">
        <span>COORD: 13.0827° N, 80.2707° E</span>
        <span>MEMORY: OPTIMAL</span>
      </div>

      <div className="grid-overlay"></div>
      <Scanline />

      {/* Vertical Borders for Brutalist Structure */}
      <div className="fixed inset-0 pointer-events-none z-40 flex justify-between px-6 md:px-24">
        <div className="w-px h-full bg-white/10"></div>
        <div className="w-px h-full bg-white/10 hidden md:block"></div>
        <div className="w-px h-full bg-white/10"></div>
      </div>

      <main className={`bg-black text-white min-h-screen selection:bg-white selection:text-black ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-2000`}>
        <AudioManager />

        <HeroSection />

        <div className="relative z-20 bg-black">

          <Biography />
          <Footer />
        </div>

      </main>
    </>
  );
}
