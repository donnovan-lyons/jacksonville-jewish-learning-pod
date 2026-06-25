import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Teaching Philosophy",
  description:
    "The beliefs and practices behind how we teach: structure, agency, strengths, ownership, and a Torah lens.",
  openGraph: {
    title: "Teaching Philosophy — Jacksonville Jewish Learning Pod",
    description:
      "Structured learning, strengths-based teaching, student ownership, and a Jewish lens.",
  },
};

const tenets = [
  {
    t: "A structured learning environment",
    d: "Children flourish within clear expectations and well-organized systems. Every lesson, unit, and term is carefully designed around each student's level and interests. Children know what to expect, what they are working toward, and how their day connects to larger goals.",
  },
  {
    t: "Strengths-based and responsive",
    d: "Every child has real strengths. A meaningful part of our work is helping each student discover and build on them. Within a structured framework we honor each student's pace, interests, and learning style — scaffolding instruction to meet learners where they are.",
  },
  {
    t: "Goals and student ownership",
    d: "Growth becomes real when students take ownership of it. We work with students to set clear, achievable goals and to monitor their own progress, so they understand where they are headed and what they need to accomplish each day.",
  },
  {
    t: "Learning through a Jewish lens",
    d: "We weave Jewish values into our learning wherever we can, helping students grow in middos alongside their academic skills. We want students to understand the world through a Torah lens and to see their learning as connected to who they are becoming.",
  },
  {
    t: "Positive learning stamina",
    d: "Above all, we cultivate a love of learning. We celebrate effort, normalize productive struggle, and treat mistakes as opportunities. The goal is children who are academically capable, resilient, curious, and confident in their ability to grow.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHeader
        eyebrow="A note for families"
        title="The beliefs and practices behind how we teach."
        lede="Learning thrives where students experience structure, agency, and consistent growth. Below is what that looks like — in every subject."
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-14">
          {tenets.map((tn, i) => (
            <div key={tn.t} className="grid grid-cols-[auto_1fr] gap-6">
              <div className="w-12 font-display text-3xl tabular-nums text-ochre">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="font-display text-2xl text-ink md:text-3xl">
                  {tn.t}
                </h2>
                <p className="mt-3 leading-relaxed text-foreground/80">{tn.d}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="mt-20 border-l-2 border-ochre pl-6 font-display text-2xl italic text-ink">
          &ldquo;My goal is to build students who are not just academically
          capable, but resilient, curious, and confident in their ability to
          grow.&rdquo;
          <footer className="mt-3 font-sans text-sm not-italic text-muted-foreground">
            — Felicia Gorelik, Founder
          </footer>
        </blockquote>
      </section>
    </>
  );
}
