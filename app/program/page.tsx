import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "The Program",
  description:
    "Classical academics, hands-on STEM, and serious Judaics — Chumash, Parsha, Tefillah, and rabbinic-led Gemara — for students in Jacksonville, FL.",
  openGraph: {
    title: "The Program — Jacksonville Jewish Learning Pod",
    description:
      "What we teach, how we teach it, and where we are going. A home school pod.",
  },
};

const pillars = [
  {
    name: "Limudei Kodesh",
    blurb:
      "Daily Tefillah, weekly Parsha, Chumash with Rashi, and middos woven into the rhythm of the day. Gemara and deeper textual learning are introduced as students are ready, based on age and ability.",
    items: [
      "Tefillah & brachos",
      "Parsha & Chumash with Rashi",
      "Middos & Jewish history",
      "Hebrew reading & vocabulary",
      "Gemara (with rabbinic involvement, as students are ready)",
    ],
  },
  {
    name: "Language & Literature",
    blurb:
      "Reading, writing, and conversation taught the classical way — through close attention to real books. Students keep notebooks, learn to argue on the page, and read more than they scroll.",
    items: [
      "Writing skills (paragraph → essay)",
      "Reading & Literature with whole books",
      "Book study & Socratic discussion",
      "Penmanship & grammar",
    ],
  },
  {
    name: "Math, One-on-One",
    blurb:
      "Math is taught individually, every day. Each child works at their own level, with mastery — not pacing — as the measure. No child is bored, no child is lost.",
    items: [
      "Daily 1:1 math instruction",
      "Conceptual + computational fluency",
      "Singapore-style word problems",
      "Mental math & estimation",
    ],
  },
  {
    name: "Science & Discovery",
    blurb:
      "Three science blocks a week — group science twice and an independent discovery block midweek — plus hands-on STEM Thursdays. We do the experiment, then we write it up.",
    items: [
      "Group science (life, earth, physical)",
      "Science notebooks & lab reports",
      "Hands-on STEM builds",
      "Nature observation & sketching",
    ],
  },
  {
    name: "History & the World",
    blurb:
      "History, geography, and Jewish history rotate through the week, anchored in primary sources and great stories — the foundations of moral imagination and civic literacy.",
    items: [
      "American history & founding documents",
      "Jewish history (Tanach → modern era)",
      "World geography & mapping",
      "Biographies & primary sources",
    ],
  },
  {
    name: "Hands, Voice, Body",
    blurb:
      "A real childhood needs a kitchen, a song, and a body that moves. Cooking, music, and movement are part of the week — not extras.",
    items: [
      "Cooking & kitchen science",
      "Music & expression",
      "Outdoor play & movement",
      "Monthly field trips",
    ],
  },
];

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Program"
        title="A classical, Torah-rooted education — taught in a room of six."
        lede="Our curriculum integrates rigorous secular academics with serious Jewish learning. Every child has a goal. Every week ends with reflection."
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-x-14 gap-y-16 md:grid-cols-2">
          {pillars.map((p) => (
            <article key={p.name}>
              <div className="text-[11px] uppercase tracking-[0.2em] text-ochre">
                Pillar
              </div>
              <h2 className="mt-2 font-display text-3xl text-ink">{p.name}</h2>
              <p className="mt-4 leading-relaxed text-foreground/80">
                {p.blurb}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 text-ochre">✦</span>
                    <span className="text-foreground/85">{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
