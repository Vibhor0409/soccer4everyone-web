import Image from "next/image";
import { BUILT, EMAIL, FOUNDER } from "@/lib/content";

export default function Founder() {
  return (
    <section id="founder" className="bg-chalk py-24 text-pitch md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow text-flare-deep">Built from zero</p>
          <h2 className="display mt-4 text-[clamp(48px,6.4vw,96px)]">A company, not a charity drive</h2>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-pitch/75">
            Founded and led by {FOUNDER.name}, Soccer4Everyone runs like a company: a product people pay for, a
            brand people follow, and a P&amp;L that points at one outcome.
          </p>
          <div className="mt-10 grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] items-end gap-6">
            <figure className="photo aspect-[4/5] rounded-2xl bg-chalk-2">
              <Image src="/img/founder.webp" alt={`${FOUNDER.name}, founder of Soccer4Everyone`} fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover object-[50%_25%]" />
            </figure>
            <div className="pb-1">
              <p className="eyebrow text-flare-deep">{FOUNDER.role}</p>
              <p className="display mt-3 text-[clamp(40px,4.4vw,60px)]">{FOUNDER.name}</p>
              <a href={`mailto:${EMAIL}`} className="ulink mt-4 inline-block break-all text-[15px] text-pitch/80 hover:text-pitch">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-2">
          {BUILT.map((b, i) => (
            <article key={b.title} className="lift rounded-3xl border border-pitch/10 bg-white/60 p-7 hover:border-flare/50 hover:bg-white">
              <p className="font-mono text-[13px] text-flare-deep">0{i + 1}</p>
              <h3 className="display mt-6 text-[40px]">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-pitch/70">{b.body}</p>
            </article>
          ))}
          <div className="rounded-3xl bg-pitch p-7 text-chalk sm:col-span-2">
            <p className="display text-[clamp(30px,3.2vw,42px)] leading-[0.95]">
              &ldquo;When potential meets opportunity, we score big and dream bigger.&rdquo;
            </p>
            <p className="eyebrow mt-5 text-mist">The line everything is built on</p>
          </div>
        </div>
      </div>
    </section>
  );
}
