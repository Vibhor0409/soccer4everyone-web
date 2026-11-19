import Image from "next/image";
import { SEASON } from "@/lib/content";

export default function Journey() {
  return (
    <section id="season" className="pitch-lines bg-pitch py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="eyebrow text-flare">The season</p>
            <h2 className="display mt-4 text-[clamp(48px,7vw,104px)]">From one cup to a pipeline</h2>
          </div>
          <p className="max-w-[44ch] text-[17px] leading-relaxed text-chalk/75">
            Every season follows the same four steps. The cup fills the fund, kit day spends it, the league keeps it
            coming, and the best kids move up.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-4 md:grid-cols-4">
          {SEASON.map((t, i) => (
            <li
              key={t.title}
              className={`lift relative rounded-3xl border p-7 ${
                i === SEASON.length - 1 ? "border-flare/60 bg-flare/10" : "border-line bg-pitch-2/70 hover:border-chalk/30"
              }`}
            >
              <p className="eyebrow text-flare">{t.step}</p>
              <h3 className="display mt-5 text-[34px]">{t.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-chalk/70">{t.body}</p>
            </li>
          ))}
        </ol>

        <figure className="photo mt-4 aspect-[16/9] rounded-3xl bg-pitch-2 md:aspect-[21/8]">
          <Image src="/img/teammates.webp" alt="Two teammates arm in arm after their match" fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover object-[50%_30%]" />
        </figure>
      </div>
    </section>
  );
}
