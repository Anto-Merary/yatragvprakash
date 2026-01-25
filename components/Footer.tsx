"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5 font-sans relative z-20">
            <div className="container mx-auto px-6 md:px-12">

                {/* Main Title Section */}
                <div className="flex justify-center mb-24 relative">
                    <h1 className="text-[12vw] md:text-[10vw] font-akira tracking-wider leading-none text-[#d946ef] uppercase select-none">
                        YATRA'26
                    </h1>
                    {/* Decorative Dot matching the image roughly, if needed, but the text usually carries it. 
                        The image had a small circle below the 'R'. Let's add a subtle decorative element. */}
                    <div className="absolute top-[85%] left-[45%] w-3 h-3 md:w-6 md:h-6 rounded-full border border-[#d946ef] opacity-50 hidden md:block"></div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 font-mono">

                    {/* Left: Address */}
                    <div className="space-y-2">
                        <h3 className="font-bold text-lg md:text-xl text-white mb-4 font-sans tracking-wide">
                            Rajalakshmi Institute of Technology
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Bangalore Highway Road, Kuthambakkam,
                            <br />
                            Chennai, Tamil Nadu - 600124
                        </p>
                    </div>

                    {/* Right: Contact & Socials */}
                    <div className="flex flex-col items-start md:items-end gap-6 text-right w-full md:w-auto">

                        {/* Social Icons */}
                        <div className="flex gap-4 self-start md:self-end">
                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </a>
                        </div>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-4 items-start md:items-end text-sm text-gray-400 font-sans tracking-wider mt-4">
                            <a href="mailto:yatra@ritchennai.edu.in" className="hover:text-[#d946ef] transition-colors mb-2 block">yatra@ritchennai.edu.in</a>

                            <div className="flex flex-col items-start md:items-end">
                                <span className="font-bold text-white">Derry Gabriel</span>
                                <span className="text-xs text-gray-500">Overall Coordinator</span>
                                <a href="tel:+919884470171" className="hover:text-white transition-colors">+91 98844 70171</a>
                            </div>

                            <div className="flex flex-col items-start md:items-end">
                                <span className="font-bold text-white">Kishore Kumar S</span>
                                <span className="text-xs text-gray-500">Event Committee Coordinator</span>
                                <a href="tel:+918825910614" className="hover:text-white transition-colors">+91 88259 10614</a>
                            </div>

                            <div className="flex flex-col items-start md:items-end">
                                <span className="font-bold text-white">Muthu Kumaran</span>
                                <span className="text-xs text-gray-500">Joint Overall Coordinator</span>
                                <a href="tel:+919094141232" className="hover:text-white transition-colors">+91 90941 41232</a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-600 font-mono text-center md:text-left gap-4">
                    <p>Copyright &copy; 2026 Rajalakshmi Institutions</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-gray-800">|</span>
                        <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
