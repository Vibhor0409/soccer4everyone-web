import Image from "next/image";
import { CUP_FACTS } from "@/lib/content";

const SHOTS = [
  { src: "/img/squad-wide.webp", alt: "Players from every team line up together after the final", cls: "col-span-6 aspect-[16/11]" },
  { src: "/img/mvp-yellow.webp", alt: "A boys' bracket winner holding the trophy", cls: "col-span-2 aspect-[4/5]" },
  { src: "/img/trophy-black.webp", alt: "A player with the boys' trophy in front of the clubhouse", cls: "col-span-2 aspect-[4/5]" },
  { src: "/img/mvp-medal.webp", alt: "A player showing his medal next to the trophy", cls: "col-span-2 aspect-[4/5]" },
];

export default function Matchday() {
  return (
    <section id="matchday" className="bg-pitch py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-flare">Matchday</p>
            <h2 className="display mt-4 text-[clamp(48px,6.4vw,96px)]">Where the money comes from</h2>
            <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-chalk/75">
              It all happens on a dusty ground in Adajan. Teams pay to enter, the winners take home cash prizes, and
              every rupee left over buys kit.
            </p>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {CUP_FACTS.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="eyebrow text-mist">{f.k}</dt>
                  <dd className="text-right text-[15px] text-chalk">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-6 content-start gap-3 md:gap-4">
            {SHOTS.map((s) => (
              <figure key={s.src} className={`photo rounded-2xl bg-pitch-2 ${s.cls}`}>
                <Image src={s.src} alt={s.alt} fill sizes="(min-width: 1024px) 40vw, 50vw" className="object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
