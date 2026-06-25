import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import hero from "@/app/assets/hero.jpg";
import learning from "@/app/assets/learning.jpg";
import { OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Jacksonville Jewish Learning Pod — Classical, Torah-rooted K–6 home school",
  description:
    "A small, rigorous home school learning pod in Jacksonville, FL. Classical academics, hands-on discovery, and serious Jewish learning for K–6 families.",
  openGraph: {
    title: "Jacksonville Jewish Learning Pod",
    description:
      "Classical learning, hands-on discovery, and a warm Jewish home for K–6 families in Jacksonville, FL.",
    images: [OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-end gap-12 px-6 pb-20 pt-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 text-[11px] uppercase tracking-[0.24em] text-ochre">
              Jacksonville, Florida · Enrolling 2026–2027
            </div>
            <h1 className="font-display text-5xl leading-[0.95] text-balance text-ink md:text-7xl">
              A small pod. <span className="italic text-ochre">Serious</span>{" "}
              learning. A Jewish home.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              A boutique home school learning pod for families in
              Jacksonville&apos;s Orthodox community — pairing classical
              academics and hands-on discovery with a structured, joyful day of
              Torah learning.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/enroll"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-ink"
              >
                Inquire about a seat →
              </Link>
              <Link
                href="/program"
                className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-primary-foreground"
              >
                See the program
              </Link>
            </div>
            <dl className="mt-14 grid max-w-md grid-cols-2 gap-6 border-t border-border/70 pt-8">
              {[
                ["10:30–2:30", "Daily hours"],
                ["≤ 6", "Students per pod"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-ink">{v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <Image
                src={hero}
                alt="An open chumash on a sunlit wooden table"
                placeholder="blur"
                priority
                className="aspect-[4/5] rounded-sm object-cover shadow-2xl shadow-ink/20"
              />
              <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] border border-border/60 bg-paper px-5 py-4 shadow-lg md:block">
                <div className="font-display italic text-ink">
                  &ldquo;Chanoch la&apos;naar al pi darko.&rdquo;
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Mishlei 22:6
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-border/60 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-ochre">
            What we believe
          </div>
          <h2 className="max-w-3xl font-display text-4xl text-balance text-ink md:text-5xl">
            Children flourish where structure meets warmth, and rigor meets
            curiosity.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                t: "Classical & rigorous",
                d: "Carefully sequenced reading, writing, math, science, history, and geography — taught with depth, not breadth.",
              },
              {
                t: "Torah-centered",
                d: "Chumash, Parsha, Tefillah, and middos every day. Rabbinic-led Gemara learning.",
              },
              {
                t: "Small by design",
                d: "Up to six students. One-on-one math. A teacher who actually knows your child.",
              },
            ].map((p, i) => (
              <div key={p.t} className="relative pl-8">
                <span className="absolute left-0 top-1 font-display text-lg text-ochre">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-ink">{p.t}</h3>
                <p className="mt-3 leading-relaxed text-foreground/75">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + intro band */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <Image
          src={learning}
          alt="Children working on a hands-on science experiment"
          placeholder="blur"
          className="aspect-[5/4] rounded-sm object-cover shadow-xl shadow-ink/10"
        />
        <div>
          <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-ochre">
            A day in the pod
          </div>
          <h2 className="font-display text-4xl text-balance text-ink">
            Mornings of close reading. Afternoons of Torah, science, and field
            work.
          </h2>
          <p className="mt-6 leading-relaxed text-foreground/80">
            Every day begins with goal-setting and every week ends with
            reflection. In between: writing skills, literature, group science,
            one-on-one math, cooking, music, hands-on STEM — and an hour of
            Judaics taught with the seriousness it deserves. Field trips at least
            once a month take the classroom into the world.
          </p>
          <Link
            href="/schedule"
            className="mt-8 inline-flex items-center gap-2 border-b border-ochre pb-1 text-sm font-medium text-ink transition-colors hover:text-ochre"
          >
            See the sample weekly schedule →
          </Link>
        </div>
      </section>

      {/* Community CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-ochre">
              Considering Jacksonville?
            </div>
            <h2 className="font-display text-4xl text-balance md:text-5xl">
              An emerging Orthodox community on Florida&apos;s First Coast.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-primary-foreground/80">
              An eruv, two shuls within walking distance, a community kollel, two
              mikvaos, year-round sunshine, and a lower cost of living than the
              Northeast. Families are quietly moving here — and the pod is part
              of the answer for families seeking a serious learning option.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-full bg-ochre px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ochre-soft"
            >
              The community guide →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
