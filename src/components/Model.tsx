import { MODEL } from "@/lib/content";

export default function Model() {
  return (
    <section id="model" className="bg-chalk py-24 text-pitch md:py-32">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow text-flare-deep">The model</p>
            <h2 className="display mt-4 text-[clamp(48px,7vw,104px)]">
              Teams pay to play. Kids play for free.
            </h2>
          </div>
          <p className="max-w-[46ch] text-[17px] leading-relaxed text-pitch/75">
            A self-funding loop instead of a donation drive. Local teams want well-run Sunday football; local brands
            want to be seen at it. Both pay, and the money goes straight to the next generation.
          </p>
        </div>

        {/* The loop: a pulse runs along the line that joins the four steps. */}
        <div className="relative mt-16">
          <svg className="absolute left-0 right-0 top-[27px] hidden h-2 w-full lg:block" viewBox="0 0 400 2" preserveAspectRatio="none" aria-hidden>
            <line x1="0" y1="1" x2="400" y2="1" stroke="#0b1611" strokeOpacity="0.15" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <line className="pulse-line" x1="0" y1="1" x2="400" y2="1" stroke="#ff5a1f" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          </svg>
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MODEL.map((m) => (
              <li key={m.n} className="lift group rounded-3xl border border-pitch/10 bg-chalk p-7 hover:border-flare/50 hover:bg-white">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pitch font-mono text-[15px] text-chalk transition-colors group-hover:bg-flare group-hover:text-pitch">
                  {m.n}
                </span>
                <h3 className="display mt-7 text-[34px]">{m.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-pitch/70">{m.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 flex items-center gap-3 font-mono text-[13px] text-pitch/60">
            <span className="inline-block h-2 w-2 rounded-full bg-flare" />
            Better kids make the league worth watching, which brings more teams and sponsors the next Sunday.
          </p>
        </div>
      </div>
    </section>
  );
}
