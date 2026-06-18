"use client";

import AnimatedCounter from "@/components/animated-counter";

interface ResultStat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const STATS: ResultStat[] = [
  {
    value: 50,
    suffix: "M+",
    label: "Views Generated",
  },
  {
    value: 250,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      aria-label="Results"
      className="bg-black relative w-full overflow-hidden px-4 py-24 sm:px-6 sm:py-28 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            Results
          </span>
          <h2 className="text-[#E1E0CC] mt-4 text-base font-medium sm:mt-6 sm:text-lg">
            Numbers that speak for themselves.
          </h2>
        </div>

        {/* Massive stats */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 lg:gap-12">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div
                className="text-[18vw] font-medium leading-[0.9] tracking-[-0.04em] sm:text-[14vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw]"
                style={{ color: "#E1E0CC" }}
              >
                <AnimatedCounter
                  to={stat.value}
                  format={(n) =>
                    `${stat.prefix ?? ""}${Math.round(n)}${stat.suffix}`
                  }
                />
              </div>

              <div className="mt-4 flex items-center gap-3 sm:mt-6">
                <div className="bg-primary h-px w-6 sm:w-8" />
                <span className="text-[10px] tracking-[0.2em] text-[#E1E0CC]/70 uppercase sm:text-xs">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}