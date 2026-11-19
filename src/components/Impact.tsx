import NumberTicker from "./NumberTicker";
import { FUNNEL, STATS } from "@/lib/content";

export default function Impact() {
  const top = FUNNEL[0].value;
  return (
    <section id="impact" className="pitch-lines relative bg-pitch py-24 md:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-flare">The scoreline</p>
            <h2 className="display mt-4 text-[clamp(48px,7vw,104px)]">Four numbers that matter</h2>
          </div>
          <p className="max-w-[40ch] text-[16px] leading-relaxed text-chalk/70">
            Every number below comes out of weekend football: entry fees and sponsors in, boots and coaching out.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.id} className="lift bg-pitch-2 p-7 hover:bg-pitch-3 md:p-9">
              <p className="display text-[clamp(64px,7vw,104px)] text-chalk">
                {s.prefix && <span className="text-flare">{s.prefix}</span>}
                <NumberTicker target={s.value} delay={i * 0.12} />
                <span className="text-flare">{s.suffix}</span>
              </p>
              <p className="mt-4 max-w-[24ch] text-[15px] leading-snug text-chalk/75">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Talent pipeline: how far the 450 went. Bar widths are to scale. */}
        <div className="mt-16 rounded-3xl border border-line bg-pitch-2/60 p-7 md:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="display text-[clamp(30px,3.4vw,44px)]">The talent pipeline</h3>
            <p className="eyebrow text-mist">1 in 6 signed pro · 1 in 41 at national tryouts</p>
          </div>
          <ul className="mt-8 space-y-5">
            {FUNNEL.map((f, i) => {
              const pct = Math.max((f.value / top) * 100, 3);
              return (
                <li key={f.label} className="grid grid-cols-[72px_1fr] items-center gap-4 md:grid-cols-[96px_1fr_260px]">
                  <span className="display text-[40px] text-chalk md:text-[52px]">{f.value}</span>
                  <div className="h-4 overflow-hidden rounded-full bg-pitch-3 md:h-5">
                    <div
                      className={`h-full rounded-full ${i === 0 ? "bg-turf" : i === 1 ? "bg-flare/80" : "bg-flare"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="col-span-2 text-[14px] text-chalk/70 md:col-span-1">{f.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
