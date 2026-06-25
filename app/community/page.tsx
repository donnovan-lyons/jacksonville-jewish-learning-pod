import type { Metadata } from "next";
import Image from "next/image";
import jax from "@/app/assets/jacksonville.jpg";

export const metadata: Metadata = {
  title: "Moving to Jacksonville — Orthodox Community Guide",
  description:
    "A guide for Orthodox Jewish families considering Jacksonville, Florida: shuls, kollel, mikvah, eruv, schools, and cost of living on the First Coast.",
  openGraph: {
    title: "Moving to Jacksonville — Orthodox Community Guide",
    description:
      "Shuls, kollel, mikvah, eruv, and family life in Jacksonville's emerging Orthodox community.",
  },
};

const institutions = [
  {
    name: "Etz Chaim Synagogue",
    role: "Modern Orthodox shul",
    desc: "The cornerstone Orthodox shul of Jacksonville, with daily minyanim, shiurim, and a warm, multi-generational community.",
    href: "https://www.etzchaim.org/",
  },
  {
    name: "Jacksonville Kollel",
    role: "Community kollel & learning",
    desc: "Adult Torah learning, chavrusas, and outreach. A serious learning anchor for families putting down roots.",
    href: "https://www.jacksonvillekollel.com/jacksonville",
  },
  {
    name: "Jacksonville Jewish",
    role: "Community guide & resources",
    desc: "A welcoming guide to observant Jewish life in Jacksonville — shuls, schools, kosher, and a hub for connecting newcomers to the community.",
    href: "https://www.jacksonvillejewish.com/",
  },
  {
    name: "Chabad of Jacksonville",
    role: "Chabad center & outreach",
    desc: "Warm, welcoming programming, holiday events, classes, and community connection for families of every background.",
    href: "https://www.chabadjacksonville.org/",
  },
  {
    name: "OU Community Profile",
    role: "Official OU community page",
    desc: "Demographics, institutions, and a snapshot of frum life in Jacksonville from the Orthodox Union.",
    href: "https://communities.ou.org/community/o6yreXfjvE",
  },
];

const stats: Array<[string, string]> = [
  ["Eruv", "Yes"],
  ["Mikvaos", "Two"],
  ["Daily minyan", "Yes"],
  ["Kosher", "Local options & delivery"],
  ["Climate", "Subtropical, sunny"],
  ["State income tax", "None"],
];

export default function CommunityPage() {
  return (
    <>
      <section className="relative">
        <Image
          src={jax}
          alt="Jacksonville riverfront at sunrise"
          placeholder="blur"
          priority
          sizes="100vw"
          className="h-[44vh] w-full object-cover md:h-[56vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-5xl px-6 pb-12">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-ochre">
              Jacksonville, Florida
            </div>
            <h1 className="max-w-3xl font-display text-5xl text-balance text-ink md:text-6xl">
              An emerging Orthodox community on the First Coast.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-foreground/85">
          For more than a decade, Orthodox families have quietly been making
          Jacksonville home — drawn by warm weather, no state income tax,
          friendly cost of living, and a tight-knit community where everyone
          actually knows everyone. Jacksonville isn&apos;t trying to be Lakewood
          or Teaneck. It&apos;s something different: a city with room to
          breathe, real neighbors, and a frum infrastructure that&apos;s growing
          each year.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-foreground/85">
          The best place to start exploring is{" "}
          <a
            href="https://www.jacksonvillejewish.com/"
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-ochre underline-offset-4 hover:text-ochre"
          >
            jacksonvillejewish.com
          </a>{" "}
          — Jacksonville&apos;s hub for community life, events, and resources
          for families considering a move.
        </p>
      </section>

      <section className="border-y border-border/60 bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-ochre">
            The essentials
          </div>
          <h2 className="font-display text-4xl text-ink">
            What&apos;s already here.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-3">
            {stats.map(([k, v]) => (
              <div key={k} className="border-t border-ochre/60 pt-3">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {k}
                </div>
                <div className="mt-1 font-display text-2xl text-ink">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-ochre">
          Institutions
        </div>
        <h2 className="font-display text-4xl text-ink">Who to know first.</h2>
        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {institutions.map((i) => (
            <a
              key={i.name}
              href={i.href}
              target="_blank"
              rel="noreferrer"
              className="group block border-t border-border pt-5 transition-colors hover:border-ochre"
            >
              <div className="text-xs uppercase tracking-wider text-ochre">
                {i.role}
              </div>
              <div className="mt-2 font-display text-2xl text-ink transition-colors group-hover:text-ochre">
                {i.name} ↗
              </div>
              <p className="mt-3 leading-relaxed text-foreground/80">
                {i.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-cream/50">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-3xl text-ink">
            Thinking of visiting?
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Felicia is happy to talk through neighborhoods, schools, shuls, and
            what life as a frum family looks like here. New families are
            welcomed warmly — and often hosted for a Shabbos meal within weeks
            of arriving.
          </p>
          <a
            href="mailto:support@abrightlightedu.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-ink"
          >
            Email Felicia →
          </a>
        </div>
      </section>
    </>
  );
}
