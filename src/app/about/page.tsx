import Image from "next/image";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutTechStack from "@/components/about/AboutTechStack";
import AboutSkills from "@/components/about/AboutSkills";
import AboutStats from "@/components/about/AboutStats";
import SiteNavigation from "@/components/layout/SiteNavigation";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030711] text-white">
      <SiteNavigation position="right"/>
      {/* Page background image */}
      <Image
        src="/images/about/about-hero-bg.webp"
        alt="about hero background"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
      />

      {/* Page content */}
      <div className="relative z-10 lg:px-10">
        <AboutHero />

        <section className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-6 px-5 py-8 md:px-8 lg:grid-cols-3 lg:px-10">
          <AboutIntro />
          <AboutTimeline />
          <AboutTechStack />
        </section>

        <section className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-6 px-5 pb-16 md:px-8 lg:grid-cols-[1.1fr_1.4fr] lg:px-10">
          <AboutSkills />
          <AboutStats />
        </section>

        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-5 pb-8  md:px-8 lg:px-10">
          <p className="border-t border-white/15 pt-6 text-center font-lato text-xs text-white/45">
            © 2026 Hyosang Han&apos;s Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
