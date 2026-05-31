import Link from "next/link";
import { FolderKanban, UserRound } from "lucide-react";

export default function HomeCards() {
  return (
    <section className="relative bg-[#030711] px-6 text-white">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Overview */}
        <div className="mb-14">
          <h2 className="font-blackHan text-4xl uppercase tracking-wider md:text-5xl">
            OVERVIEW
          </h2>

          <p className="mt-6 max-w-3xl font-lato text-base leading-7 text-white/75 md:text-lg">
            I build practical web experiences that connect design, frontend
            interaction, backend logic, and real-world product needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid w-full max-w-[800px] gap-10 md:grid-cols-2">
          {/* Projects Card */}
          <Link
            href="/projects"
            className="group relative flex h-[260px] overflow-hidden rounded-2xl border border-white/20 bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.08)] transition duration-500 hover:-translate-y-2"
          >
            {/* Expanding circle */}
            <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-[60px] bg-gradient-to-br from-[#9fb6c3] via-[#5f7684] to-[#1b2630] transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:rounded-2xl" />

            {/* Icon */}
            <FolderKanban
              size={28}
              strokeWidth={1.8}
              className="absolute right-4 top-4 z-10 text-white"
              aria-hidden="true"
            />

            <div className="relative z-10 m-auto text-center">
              <p className="font-blackHan text-4xl uppercase tracking-wider transition duration-500 group-hover:text-white md:text-5xl">
                Projects
              </p>

              <p className="mt-4 max-w-xs font-lato text-sm text-black/60 transition duration-500 group-hover:text-white/80">
                View selected work, case studies, and full-stack development
                projects.
              </p>
            </div>
          </Link>

          {/* About Card */}
          <Link
            href="/about"
            className="group relative flex h-[260px] overflow-hidden rounded-2xl border border-white/20 bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.08)] transition duration-500 hover:-translate-y-2"
          >
            {/* Expanding circle */}
            <div className="absolute bottom-0 left-0 h-16 w-16 rounded-tr-[60px] bg-gradient-to-br from-[#b8a6b8] via-[#74667a] to-[#211b27] transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:rounded-2xl" />

            {/* Icon */}
            <UserRound
              size={28}
              strokeWidth={1.8}
              className="absolute bottom-4 left-4 z-10 text-white"
              aria-hidden="true"
            />

            <div className="relative z-10 m-auto text-center">
              <p className="font-blackHan text-4xl uppercase tracking-wider transition duration-500 group-hover:text-white md:text-5xl">
                About
              </p>

              <p className="mt-4 max-w-xs font-lato text-sm text-black/60 transition duration-500 group-hover:text-white/80">
                Learn more about my background, skills, mindset, and development
                approach.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}