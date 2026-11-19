import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="/img/squad-ball.webp"
        alt="A Soccer4Everyone squad after a Sunday-league final in Surat, medals on, ball at their feet"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_35%]"
      />
      {/* Shade the bottom so the headline reads over a bright, sunny photo. */}
      <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/70 to-pitch/10" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-pitch/70 to-transparent" />

      <div className="wrap relative pb-10 pt-28 md:pb-14">
        <p className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full bg-pitch/75 px-3.5 py-2 text-chalk backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-flare" />
          Surat, India · Sunday-league football
        </p>
        <h1 className="display max-w-[14ch] text-[clamp(56px,9.2vw,136px)]">
          Football for every kid with the talent<span className="text-flare">.</span>
        </h1>
        <p className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-chalk/85 md:text-[19px]">
          Soccer4Everyone runs Sunday-league tournaments and turns entry fees and sponsorships into pro boots and coaching
          for 9 to 14 year-olds who can&apos;t afford either.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#impact" className="btn btn-flare">
            See the results <span className="arrow">→</span>
          </a>
          <a href="#model" className="btn btn-ghost text-chalk">
            How the model works
          </a>
        </div>

        <dl className="mt-10 grid max-w-3xl grid-cols-3 gap-6 border-t border-line pt-6">
          {[
            ["$65K", "raised so far"],
            ["450+", "athletes kitted"],
            ["71", "signed to pro clubs"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="display text-[clamp(36px,5vw,60px)] text-chalk">{v}</dt>
              <dd className="mt-1 text-[13px] text-chalk/70 md:text-[14px]">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
