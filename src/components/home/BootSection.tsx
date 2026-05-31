"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const bootLines = [
  "> initializing profile...",
  "> loading projects...",
  "> connecting design + code...",
  "> Hyosang Han",
];

export default function BootSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [statusText, setStatusText] = useState("");

  const fullText = bootLines.join("\n");

  useEffect(() => {
    let bootIndex = 0;
    let statusIndex = 0;

    const statusFullText = "READY TO BUILD";

    const bootTypingInterval = window.setInterval(() => {
      setDisplayedText(fullText.slice(0, bootIndex + 1));
      bootIndex += 1;

      if (bootIndex >= fullText.length) {
        window.clearInterval(bootTypingInterval);

        const statusTypingInterval = window.setInterval(() => {
          setStatusText(statusFullText.slice(0, statusIndex + 1));
          statusIndex += 1;

          if (statusIndex >= statusFullText.length) {
            window.clearInterval(statusTypingInterval);
          }
        }, 70);
      }
    }, 55);

    return () => {
      window.clearInterval(bootTypingInterval);
    };
  }, [fullText]);

  return (
    <section className="relative min-h-[300px] overflow-hidden bg-[#030711] px-6 py-16 text-white">
      {/* Background image on right */}
      <Image
        src="/images/home/boot-bg.webp"
        alt="boot background"
        width={900}
        height={650}
        className="pointer-events-none absolute right-[5%] top-[50%] z-0 w-[70vw] max-w-[900px] -translate-y-1/2 opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] pt-7">
        <div className="flex items-center gap-8">
          <h2 className="font-blackHan text-4xl uppercase tracking-wider md:text-6xl">
            BOOT
          </h2>

          <div className="h-px flex-1 bg-white/70" />
        </div>

        <div className="mt-10 min-h-[130px] font-rajdhani text-xl font-medium leading-10 text-white md:text-2xl md:ml-10">
          <pre className="whitespace-pre-wrap font-lato">
            {displayedText}
            <span className="terminal-cursor" />
          </pre>
        </div>

        <div className="mt-15 border-b border-white/70 pt-20 pb-6">
          <p className="font-lato text-xl uppercase tracking-wide">
            <span className="text-blue-400">STATUS:</span>{" "}
            <span className="text-white">{statusText}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
