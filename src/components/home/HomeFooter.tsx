import Link from "next/link";
import type { FooterNavigationItem } from "@/types/navigation";
import { FolderKanban, Home, Mail, User } from "lucide-react";

const footerLinks: FooterNavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    color: "group-hover:text-[#b8a6b8]",
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
    color: "group-hover:text-[#9fb6c3]",
  },
  {
    label: "About",
    href: "/about",
    icon: User,
    color: "group-hover:text-[#c7b7d8]",
  },
];

export default function HomeFooter() {
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
              <Mail
                size={16}
                strokeWidth={1.8}
                className="text-white/50 transition duration-300 group-hover:text-[#9fb6c3]"
              />
              <span>Ian.han7540@gmail.com</span>
            </a>

            <a
              href="https://github.com/Ian-Hyosang-Han"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition duration-300 hover:text-white"
            >
              <span className="text-white/50 transition duration-300 group-hover:text-[#b8a6b8]">
                <GithubLogoIcon />
              </span>

              <span>https://github.com/Ian-Hyosang-Han</span>
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 md:items-end">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-5 font-rajdhani text-lg uppercase tracking-[0.25em] text-white">
                {footerLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 transition duration-500 hover:text-white"
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.8}
                          className={`text-white/50 transition duration-500 ${link.color}`}
                        />

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

function GithubLogoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.99c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}
