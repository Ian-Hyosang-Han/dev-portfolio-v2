export default function AboutHero() {
    return (
      <section className="relative px-5 pt-15 text-white md:px-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-10 pb-16 lg:min-h-[420px]">
          <div className="max-w-3xl">
            <h1 className="font-blackHan text-2xl uppercase tracking-wider md:text-3xl lg:text-5xl">
              About Me
            </h1>
  
            <p className="mt-3 max-w-2xl font-lato text-base leading-7 text-white/70 md:text-lg">
              I am a full-stack developer focused on building practical,
              maintainable, and user-centered web applications.
            </p>
          </div>
        </div>
      </section>
    );
  }