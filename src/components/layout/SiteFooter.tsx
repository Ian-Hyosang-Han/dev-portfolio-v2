import Link from "next/link";
import type { FooterNavigationItem } from "@/types/navigation";
import { FaGithubSquare, FaEnvelope } from "react-icons/fa";

const footerLinks: FooterNavigationItem[] = [
  {
    label: "Home",
    href: "/",
    emoji: "🏠",
  },
  {
    label: "Projects",
    href: "/projects",
    emoji: "🗂️",
  },
  {
    label: "About",
    href: "/about",
    emoji: "🎁",
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#030711] px-6 pb-10 pt-16 text-white">
      <div className="mx-auto w-full max-w-[1200px] border-t border-white pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-3 font-lato text-md text-white/50">
            <a
              href="mailto:Ian.han7540@gmail.com"
              className="group flex items-center gap-2 transition duration-300 hover:text-white"
            >
              <FaEnvelope
                size={18}
                className="fill-white transition duration-300 group-hover:fill-[#9fb6c3]"
                aria-hidden="true"
              />
              <span>Ian.han7540@gmail.com</span>
            </a>

            <a
              href="https://github.com/Ian-Hyosang-Han"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition duration-300 hover:text-white"
            >
              <FaGithubSquare
                size={18}
                className="fill-white transition duration-300 group-hover:fill-[#b8a6b8]"
                aria-hidden="true"
              />

              <span>https://github.com/Ian-Hyosang-Han</span>
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 md:items-end">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-5 font-rajdhani text-lg uppercase tracking-[0.25em] text-white">
                {footerLinks.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 transition duration-500 hover:text-white"
                      >
                        <span className="text-base leading-none transition duration-500 group-hover:scale-110">
                          {link.emoji}
                        </span>

                        <span className="relative inline-block h-[1.2em] overflow-hidden">
                          <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                            {link.label}
                          </span>

                          <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                            {link.label}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <p className="font-lato text-xs text-white/40">
              © 2026 Hyosang Han. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
