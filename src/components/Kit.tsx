import Image from "next/image";
import { KIT } from "@/lib/content";

export default function Kit() {
  return (
    <section id="kit" className="bg-chalk py-24 text-pitch md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow text-flare-deep">Where the money goes</p>
          <h2 className="display mt-4 text-[clamp(48px,6.4vw,96px)]">Boots on, no more excuses</h2>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-pitch/75">
            Talented kids get turned away from trials for not having the right kit. An AIFF-licensed coach picks the
            players; we buy exactly what each one is missing and hand it over in person.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {KIT.map((k, i) => (
              <li key={k.item} className="lift flex gap-4 rounded-2xl border border-pitch/10 bg-white/60 p-5 hover:border-flare/50 hover:bg-white">
                <span className="font-mono text-[13px] text-flare-deep">0{i + 1}</span>
                <div>
                  <h3 className="display text-[28px]">{k.item}</h3>
                  <p className="mt-1 text-[14px] leading-snug text-pitch/70">{k.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <figure className="photo col-span-2 aspect-[359/285] rounded-2xl bg-chalk-2">
            <Image src="/img/kit-boxes.webp" alt="Kids at kit day holding their new boot boxes" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </figure>
          <figure className="photo aspect-[4/3] rounded-2xl bg-chalk-2">
            <Image src="/img/kit-boots.webp" alt="New boots and shin guards laid out on boxes in front of the players" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
          </figure>
          <figure className="photo aspect-[4/3] rounded-2xl bg-chalk-2">
            <Image src="/img/kit-stack.webp" alt="The team stacking boot boxes before kit day" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}
