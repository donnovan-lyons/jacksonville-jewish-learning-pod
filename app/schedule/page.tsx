import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Schedule & Calendar",
  description:
    "A week in the pod and the 2026–2027 school calendar for the Jacksonville Jewish Learning Pod.",
  openGraph: {
    title: "Schedule & Calendar — Jacksonville Jewish Learning Pod",
    description: "Our weekly rhythm and the 2026–2027 calendar at a glance.",
  },
};

type Block = { time: string; full?: string; days?: string[] };

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const blocks: Block[] = [
  { time: "15 min", full: "Arrival, Goal Review & Daily Plan" },
  {
    time: "30 min",
    days: [
      "Writing Skills",
      "Reading & Literature",
      "Writing Skills",
      "Reading & Literature",
      "Parsha",
    ],
  },
  {
    time: "40 min",
    days: [
      "Group Science",
      "History & Jewish History",
      "Science & Discovery",
      "Geography & the World",
      "Group Science",
    ],
  },
  { time: "15 min", full: "Break & Topic of the Day" },
  {
    time: "35 min",
    days: [
      "Math, One-on-One",
      "Math, One-on-One",
      "Math, One-on-One",
      "Math, One-on-One",
      "Math, One-on-One",
    ],
  },
  {
    time: "30 min",
    days: ["Cooking", "Book Study", "Music & Expression", "Hands-On STEM", "Book Study"],
  },
  {
    time: "15 min",
    days: [
      "Break & Recharge",
      "Break & Recharge",
      "Break & Recharge",
      "Break & Recharge",
      "Weekly Reflection",
    ],
  },
  { time: "1 hour", full: "Judaics" },
];

const closures: Array<[string, string]> = [
  ["Erev Rosh Hashanah", "Sep 11, 2026"],
  ["Yom Kippur", "Sep 21, 2026"],
  ["Sukkos", "Sep 24 – Oct 5, 2026"],
  ["Thanksgiving", "Nov 25 – 27, 2026"],
  ["Winter Break", "Dec 28 – Jan 1, 2027"],
  ["MLK Day", "Jan 18, 2027"],
  ["President's Day", "Feb 15, 2027"],
  ["Purim", "Mar 23, 2027"],
  ["Pesach Break", "Apr 19 – 30, 2027"],
  ["Memorial Day", "May 31, 2027"],
];

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sample Schedule"
        title="A sample week in the pod."
        lede="Mornings begin with goals and plans. Afternoons end with reflection. In between, a steady rhythm of close work and bright discovery."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-x-auto rounded-sm border border-border bg-paper">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="w-24 px-4 py-4 font-display text-base text-ink">
                  Time
                </th>
                {days.map((d) => (
                  <th
                    key={d}
                    className="px-4 py-4 font-display text-base text-ink"
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blocks.map((b, idx) => (
                <tr key={idx} className="border-t border-border/70">
                  <td className="px-4 py-4 align-top text-xs uppercase tracking-wider text-muted-foreground">
                    {b.time}
                  </td>
                  {b.full ? (
                    <td
                      colSpan={5}
                      className="bg-ochre-soft/40 px-4 py-4 font-display text-ink"
                    >
                      {b.full}
                    </td>
                  ) : (
                    b.days!.map((d, i) => (
                      <td key={i} className="px-4 py-4 text-foreground/85">
                        {d}
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Daily hours: 10:30 am – 2:30 pm. Subject to refinement based on each
          cohort.
        </p>
      </section>

      <section className="border-y border-border/60 bg-cream/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="mb-4 text-[11px] uppercase tracking-[0.22em] text-ochre">
              2026 – 2027
            </div>
            <h2 className="font-display text-4xl text-ink">
              The year, at a glance.
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              The pod year follows the Jewish calendar with American holidays
              respected. First day Aug 24, 2026. Last day Jun 10, 2027.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {closures.map(([name, date]) => (
                <li
                  key={name}
                  className="flex items-baseline justify-between border-b border-border/60 py-3"
                >
                  <span className="font-display text-lg text-ink">{name}</span>
                  <span className="text-sm tabular-nums text-muted-foreground">
                    {date}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Field trips are scheduled at least once each month — to museums,
              parks, the riverfront, and community sites. Family-friendly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
