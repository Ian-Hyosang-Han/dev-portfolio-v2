type ProjectsHeroProps = {
    totalProjects: number;
  };
  
  export default function ProjectsHero({ totalProjects }: ProjectsHeroProps) {
    return (
      <section className="relative px-5 pt-[60px] text-white md:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Left */}
            <div>
              <h1 className="font-blackHan text-4xl uppercase tracking-wider md:text-5xl lg:text-6xl">
                Projects
              </h1>
  
              <p className="mt-6 max-w-xl font-lato text-base leading-7 text-white/75 md:text-lg">
                A collection of web applications and projects built with modern
                technologies, practical workflows, and real-world problem solving.
              </p>
            </div>
  
            {/* Right small stat */}
            <div className="hidden min-[900px]:block">
              <p className="font-rajdhani text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                Total Projects
              </p>
  
              <div className="mt-3 flex items-center gap-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d7e58d]" />
                <div className="h-px w-12 bg-white/25" />
                <span className="font-rajdhani text-sm font-semibold tracking-[0.2em] text-white/70">
                  {totalProjects}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }