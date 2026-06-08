const filterItems = [
    "All",
    "Full-Stack",
    "Front-End",
    "JavaScript",
    "React",
    "Next.js",
    "WordPress",
    "TypeScript",
    "C# / .NET",
  ];
  
  type ProjectFilterProps = {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
  };
  
  export default function ProjectFilter({
    activeFilter,
    onFilterChange,
  }: ProjectFilterProps) {
    return (
      <section className="relative px-5 py-4 text-white md:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="mb-3 flex items-center gap-3 font-rajdhani text-sm font-semibold uppercase tracking-[0.28em] text-[#b8c77a]">
            <span>02</span>
            <span>/</span>
            <span>Filter Projects</span>
          </div>
  
          <div className="flex flex-wrap items-center gap-3 border border-white/15 bg-white/[0.03] p-3 backdrop-blur-sm">
            {filterItems.map((item) => {
              const isActive = activeFilter === item;
  
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => onFilterChange(item)}
                  className={`rounded-sm border px-5 py-2 font-rajdhani text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 ${
                    isActive
                      ? "border-[#b8c77a]/70 bg-[#b8c77a]/10 text-[#d7e58d]"
                      : "border-transparent text-white/60 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    );
  }