type ProjectDetailPanelProps = {
    eyebrow: string;
    title: string;
    children: React.ReactNode;
    className?: string;
  };
  
  export default function ProjectDetailPanel({
    eyebrow,
    title,
    children,
    className = "",
  }: ProjectDetailPanelProps) {
    return (
      <section
        className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-5 text-white backdrop-blur-sm md:p-6 ${className}`}
      >
        <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r border-t border-[#b8c77a]/40" />
  
        <div>
          <p className="font-rajdhani text-xs font-semibold uppercase tracking-[0.28em] text-[#b8c77a] md:text-sm">
            {eyebrow}
          </p>
  
          <h2 className="mt-3 font-blackHan text-2xl uppercase tracking-wider text-white md:text-3xl">
            {title}
          </h2>
        </div>
  
        <div className="mt-6">{children}</div>
      </section>
    );
  }