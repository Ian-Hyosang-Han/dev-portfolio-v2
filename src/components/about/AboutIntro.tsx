import AboutPanel from "@/components/about/AboutPanel";

export default function AboutIntro() {
  return (
    <AboutPanel title="About">
      <h2 className="font-rajdhani text-2xl font-semibold leading-snug text-[#b8c77a] md:text-3xl">
        Building digital solutions with purpose.
      </h2>

      <p className="mt-6 font-lato text-sm leading-7 text-white/65 md:text-base">
        I enjoy turning ideas into functional and meaningful products by
        connecting design, user experience, and reliable code. My focus is on
        writing maintainable code, creating smooth user experiences, and
        building practical web applications that can continue to grow through
        real-world use and continuous improvement.
      </p>

      <div className="mt-8 border-t border-white/10 pt-5">
        <div className="flex flex-wrap gap-x-4 gap-y-2 font-rajdhani text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          <span className="text-[#b8c77a]">Focused on</span>
          <span className="flex items-center gap-4">
            Performance
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </span>{" "}
          <span className="flex items-center gap-4">
            Usability
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </span>{" "}
          <span>Scalability</span>
        </div>
      </div>
    </AboutPanel>
  );
}
