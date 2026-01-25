"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                yPercent: -100,
                autoAlpha: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.2,
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

    const links = [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center text-white mix-blend-difference"
        >
            {/* Logo Area */}
            <div className="flex flex-col group cursor-pointer">
                <Link href="/" className="font-serif text-3xl font-black tracking-tighter uppercase leading-none group-hover:text-accent transition-colors">
                    GV<span className="text-accent">.</span>P
                </Link>
                <div className="h-px w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Links */}
            <div className="flex gap-8 md:gap-16 items-center">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="relative font-mono text-xs font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors duration-300"
                    >
                        <span className="relative z-10">[{link.name}]</span>
                    </Link>
                ))}

                <button className="hidden md:block w-3 h-3 bg-accent animate-pulse rounded-full"></button>
            </div>
        </nav>
    );
}
