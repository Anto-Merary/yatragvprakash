"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [lines, setLines] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const bootSequence = [
            "INITIALIZING KERNEL...",
            "LOADING SOUND DRIVERS...",
            "CHECKING MEMORY INTEGRITY...",
            "ALLOCATING VRAM...",
            "MOUNTING FILE SYSTEM...",
            "ESTABLISHING CONNECTION...",
            "SYSTEM READY."
        ];

        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < bootSequence.length) {
                setLines((prev) => [...prev, bootSequence[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
            }
        }, 200);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-[9999] flex flex-col justify-between p-8 font-mono text-xs md:text-sm text-gray-300 selection:bg-accent selection:text-white">
            <div>
                <div className="mb-8 text-accent">
                    SANA_OS v2.0.0 (c) 2026 // CINEMATIC_CORE
                    <br />
                    BIOS Date 01/24/26 21:00:00 Ver: 10.0.1
                </div>
                <div className="flex flex-col gap-1">
                    {lines.map((line, i) => (
                        <div key={i} className="flex">
                            <span className="text-accent mr-2">&gt;</span>
                            {line}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between mb-2 text-accent">
                    <span>SYSTEM_INITIALIZATION</span>
                    <span>{progress}%</span>
                </div>
                <div className="w-full h-1 bg-gray-900 border border-white/20">
                    <div
                        className="h-full bg-accent relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
