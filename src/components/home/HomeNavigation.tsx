"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function HomeNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Ian.han7540@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <>
      {/* Fixed navigation button */}
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed left-10 top-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white shadow-[0_0_25px_rgba(255,255,255,0.15)] backdrop-blur-md transition duration-300 hover:scale-105 hover:border-white/60"
      >
        <span className="relative flex h-6 w-6 flex-col items-center justify-center gap-1.5">
          <span
            className={`h-[2px] w-6 rounded-full bg-white transition duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 rounded-full bg-white transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-6 rounded-full bg-white transition duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Overlay navigation */}
      <div
        className={`fixed inset-0 z-[90] overflow-hidden transition duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Noise background image */}
        <Image
          src="/images/navigation/noise-background.webp"
          alt="noise background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col justify-between px-8 py-28 md:flex-row md:items-end md:px-16 lg:px-24">
          {/* Left navigation links */}
          <nav aria-label="Main navigation">
            <ul className="space-y-6 md:space-y-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleCloseMenu}
                    className="group relative inline-block font-blackHan text-5xl font-bold uppercase tracking-wider text-white transition duration-300 hover:translate-x-3 md:text-7xl lg:text-8xl"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right contact card */}
          <aside className="group relative mt-16 w-full max-w-sm overflow-hidden border border-white/40 bg-white/5 p-6 text-white backdrop-blur-md transition duration-500 hover:border-white hover:bg-white/10 hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] md:mt-0">
            <h2 className="font-blackHan text-lg uppercase tracking-[0.35em] text-white">
              Contact me
            </h2>

            <div className="mt-8 space-y-3 text-sm text-white/80">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="block cursor-pointer font-lato text-left transition duration-300 hover:text-white"
              >
                Ian.han7540@gmail.com
                {copied && (
                  <span className="ml-2 font-lato text-[#FFFFFF]">Copied!</span>
                )}
              </button>

              <a
                href="https://github.com/Ian-Hyosang-Han"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition duration-300 hover:text-white font-lato"
              >
                https://github.com/Ian-Hyosang-Han
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
