import Image from "next/image";
import { EMAIL, INSTAGRAM } from "@/lib/content";
import { Wordmark } from "./Nav";

export default function Partner() {
  return (
    <>
      <section id="partner" className="relative overflow-hidden bg-pitch py-28 md:py-36">
        <Image src="/img/squad-wide.webp" alt="" fill sizes="100vw" className="object-cover opacity-25" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-pitch via-pitch/80 to-pitch" />
        <div className="wrap relative text-center">
          <p className="eyebrow text-flare">Next season</p>
          <h2 className="display mx-auto mt-4 max-w-[16ch] text-[clamp(56px,9vw,136px)]">Bring the league to your city</h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-relaxed text-chalk/75">
            The model is simple to copy: a ground, a fixture list, sponsors and a coach who can spot talent. If you want
            to sponsor, fund or run the next season, let&apos;s talk.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`mailto:${EMAIL}?subject=Soccer4Everyone`} className="btn btn-flare">
              Email the founder <span className="arrow">→</span>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-chalk">
              Message us on Instagram
            </a>
          </div>
          <a href={`mailto:${EMAIL}`} className="ulink mt-6 inline-block text-[15px] text-chalk/70 hover:text-chalk">
            {EMAIL}
          </a>
        </div>
      </section>

      <footer className="border-t border-line bg-pitch py-10">
        <div className="wrap flex flex-col justify-between gap-6 text-[14px] text-chalk/60 md:flex-row md:items-center">
          <Wordmark className="text-chalk" />
          <p>Surat, Gujarat, India</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${EMAIL}`} className="ulink text-chalk/80 hover:text-chalk">
              {EMAIL}
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="ulink text-chalk/80 hover:text-chalk">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
