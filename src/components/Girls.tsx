import Image from "next/image";

export default function Girls() {
  return (
    <section id="girls" className="bg-flare py-24 text-pitch md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="grid grid-cols-[1.4fr_1fr] gap-4">
          <figure className="photo aspect-[4/5] rounded-2xl bg-flare-deep">
            <Image src="/img/girls-champions.webp" alt="The girls' bracket champions with their trophy and gold medals" fill sizes="(min-width: 1024px) 34vw, 58vw" className="object-cover" />
          </figure>
          <figure className="photo mt-16 aspect-[4/5] rounded-2xl bg-flare-deep">
            <Image src="/img/girls-trophy.webp" alt="A girls' bracket player holding the trophy on the pitch" fill sizes="(min-width: 1024px) 24vw, 40vw" className="object-cover" />
          </figure>
        </div>
        <div>
          <p className="eyebrow">Everyone means everyone</p>
          <h2 className="display mt-4 text-[clamp(48px,6.4vw,96px)]">Girls get their own bracket</h2>
          <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-pitch/85">
            Every cup runs a girls&apos; tournament with its own cash prize, on the same pitch, the same day. Girls who
            rarely get a competitive game in Surat get a final, a trophy and a crowd.
          </p>
          <a href="#season" className="btn mt-9 bg-pitch text-chalk hover:bg-pitch-2">
            See how a season works <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
