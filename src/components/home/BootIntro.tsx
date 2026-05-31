import Image from "next/image";

export default function BootIntro() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background hero image */}
      <Image
        src="/images/home/hero-bg.webp"
        alt="hero background image"
        fill
        priority
        className="object-cover"
      />

      {/* Earth */}
      <div
        className="absolute left-1/2 z-20 -translate-x-1/2 top-[-2%] w-[800px]
                max-[1500px]:top-[0%] max-[1500px]:w-[800px]
                max-[1300px]:top-[0%] max-[1300px]:w-[800px]
                max-[1100px]:top-[5%] max-[1100px]:w-[700px]
                max-[900px]:top-[10%] max-[900px]:w-[600px]
                max-[700px]:top-[15%] max-[700px]:w-[500px]"
      >
        <Image
          src="/images/home/earth.webp"
          alt="Earth"
          width={900}
          height={1100}
          priority
          className="animate-slow-spin object-contain"
        />
      </div>

      {/* Saturn-style text ring */}
      <div
        className="pointer-events-none absolute left-1/2 top-[45%] z-30 h-[4%] w-[45%] -translate-x-1/2 -translate-y-1/2 rotate-[15deg] overflow-hidden rounded-full border border-cyan-200/40 bg-cyan-300/10 shadow-[0_0_25px_rgba(103,232,249,0.25)] backdrop-blur-md
                max-[1500px]:top-[45%] max-[1500px]:h-[4%] max-[1500px]:w-[50%]
                max-[1300px]:top-[45%] max-[1300px]:h-[4%] max-[1300px]:w-[55%]
                max-[1100px]:top-[45%] max-[1100px]:h-[4%] max-[1100px]:w-[55%]
                max-[900px]:top-[45%] max-[900px]:h-[4%] max-[900px]:w-[60%]
                max-[700px]:top-[45%] max-[700px]:h-[4%] max-[700px]:w-[70%]
                max-[600px]:top-[45%] max-[600px]:h-[4%] max-[600px]:w-[80%]
      "
      >
        <div className="flex h-full w-max items-center gap-10 whitespace-nowrap px-10 text-[10px] font-medium uppercase tracking-[0.3em] text-white animate-ring-text md:text-xs">
          <span>
            Through change, we learn. Through pressure, we build. Through AI, we
            grow.
          </span>
          <span>
            Through change, we learn. Through pressure, we build. Through AI, we
            grow.
          </span>
          <span>
            Through change, we learn. Through pressure, we build. Through AI, we
            grow.
          </span>
          <span>
            Through change, we learn. Through pressure, we build. Through AI, we
            grow.
          </span>
        </div>
      </div>

      {/* Notebook */}
      <div className="absolute left-[-8%] top-[68%] z-20 w-[55vw] max-w-[500px] animate-float-soft lg:left-[0.5%] lg:top-[68%] lg:w-[30vw] max-[1500px]:hidden">
        <Image
          src="/images/home/notebook.webp"
          alt="Notebook image"
          width={500}
          height={400}
          className="h-auto w-full"
        />
      </div>

      {/* Stand - hide on smaller screens */}
      <div className="absolute right-[-3%] top-[63%] z-20 hidden w-[22vw] max-w-[370px] animate-float-slow min-[1500px]:block">
        <Image
          src="/images/home/stand.webp"
          alt="Stand image"
          width={370}
          height={270}
          className="h-auto w-full"
        />
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-40 h-48 w-full bg-gradient-to-b from-transparent to-[#030711]" />
      
    </section>
  );
}
