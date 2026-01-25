"use client";

import Section from "./Section";

export default function Footer() {
    return (
        <Section id="contact" className="py-24 border-t border-white/20 bg-black relative overflow-hidden z-20">

            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none flex flex-col justify-between">
                <div className="w-full h-px bg-white/20"></div>
                <div className="w-full h-px bg-white/20"></div>
                <div className="w-full h-px bg-white/20"></div>
                <div className="w-full h-px bg-white/20"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">

                <h2 className="text-[12vw] font-serif font-black uppercase text-white leading-[0.8] tracking-tighter mix-blend-difference mb-12">
                    Let's<br /><span className="stroke-text-white hover:text-accent transition-colors duration-500">Create</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mb-24">
                    <a href="mailto:hello@sanamusic.com" className="font-mono text-xl md:text-2xl text-white border-b-2 border-accent hover:bg-accent hover:text-black transition-all p-2">
                        hello@gvprakash.com
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
                    {["Instagram", "Twitter", "Spotify", "YouTube"].map((social) => (
                        <a key={social} href="#" className="font-mono text-xs uppercase tracking-widest text-gray-500 hover:text-white hover:scale-110 transition-all">
                            {social}
                        </a>
                    ))}
                </div>

                <div className="mt-24 font-mono text-[10px] text-gray-600 uppercase tracking-[0.5em]">
                    System Status: Online // © 2024 GV Prakash
                </div>

            </div>
        </Section>
    );
}
