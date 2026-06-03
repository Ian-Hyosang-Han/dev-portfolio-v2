export default function AboutHero() {
  return (
    <section className="relative px-5 pt-15 text-white md:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-10 pb-5">
        <div className="max-w-3xl">
          <h1 className="font-blackHan text-4xl uppercase tracking-wider md:text-5xl lg:text-5xl">
            About Me
          </h1>

          <p className="mt-3 max-w-100 font-lato text-base leading-7 text-white/70 md:text-md">
            I am a full-stack developer focused on building practical,
            maintainable, and user-centered web applications.
          </p>
        </div>
      </div>

      {/* Floating keywords */}

      <div className="pointer-events-none absolute right-[25%] top-[18%] hidden w-[500px] animate-float-y-soft font-rajdhani uppercase tracking-[0.18em] text-white/70 min-[1301px]:block">

        {/* Focus */}
        <div className="absolute left-5 top-0">
          <p className="text-sm font-semibold text-[#b8c77a]">// Focus</p>
          <div className="mt-4 space-y-1 text-sm">
            <p>Solve real problems</p>
            <p>Deliver impact</p>
          </div>
        </div>

        {/* Approach */}
        <div className="absolute left-[130%] top-[10px]">
          <p className="whitespace-nowrap text-sm font-semibold text-[#b8c77a]">// Approach</p>
          <div className="mt-4 space-y-1 text-sm">
            <p>Plan</p>
            <p>Build</p>
            <p>Improve</p>
            <p>Repeat</p>
          </div>
        </div>


        {/* Mindset */}
        <div className="absolute right-0 top-[50px]">
          <p className="text-sm font-semibold text-[#b8c77a]">// Mindset</p>
          <div className="mt-4 space-y-2 text-sm">
            <p>Continuous learning</p>
            <p>Attention to detail</p>
            <p>User-first thinking</p>
          </div>
        </div>
      </div>
    </section>
  );
}
