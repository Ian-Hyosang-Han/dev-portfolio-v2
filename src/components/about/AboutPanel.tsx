type AboutPanelProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
  };
  
  export default function AboutPanel({
    title,
    children,
    className = "",
  }: AboutPanelProps) {
    return (
      <section
        className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-5 backdrop-blur-sm md:p-6 ${className}`}
      >
        <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r border-t border-[#b8c77a]/40" />
  
        <p className="font-rajdhani text-xs font-semibold uppercase tracking-[0.25em] text-[#b8c77a] md:text-sm">
          // {title}
        </p>
  
        <div className="mt-5 md:mt-6">{children}</div>
      </section>
    );
  }