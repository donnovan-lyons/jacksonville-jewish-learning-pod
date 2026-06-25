import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import felicia from "@/app/assets/felicia.png";

export const metadata: Metadata = {
  title: "About Felicia Gorelik",
  description:
    "Founder Felicia Gorelik on her background, approach to teaching, and vision for Jewish learning in Jacksonville, FL.",
  openGraph: {
    title: "About Felicia Gorelik — Founder",
    description:
      "Educator, mother, and founder of the Jacksonville Jewish Learning Pod.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="The Founder" title="Felicia Gorelik" />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image
            src={felicia}
            alt="Felicia Gorelik, founder"
            placeholder="blur"
            className="aspect-[4/5] rounded-sm object-cover shadow-xl shadow-ink/10"
          />
          <div className="mt-6 text-sm text-muted-foreground">
            <div className="font-display text-lg text-ink">Felicia Gorelik</div>
            Founder & Lead Educator
            <div className="mt-4 space-y-1">
              <a
                href="mailto:support@abrightlightedu.com"
                className="block hover:text-ochre"
              >
                support@abrightlightedu.com
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 md:col-span-7">
          <p>
            I started the Jacksonville Jewish Learning Pod because some children
            simply learn better outside a traditional classroom — and those
            children deserve an education that is at once seriously academic and
            deeply Jewish. Not one then the other. Both, every day, in the same
            room.
          </p>
          <p>
            Our community is fortunate to have a wonderful day school. This pod
            exists alongside it, not instead of it — for the families
            who&apos;ve found that their child thrives with smaller groups, a
            slower pace, more movement, more flexibility, or simply a different
            kind of attention. Every child is wired differently. Some kids come
            alive in a homeschool setting, and those kids deserve rigor,
            structure, and a real Jewish education too.
          </p>
          <p>
            My approach is unapologetically structured. Every child has goals, a
            plan, and a teacher who knows them by name and by need. We sit at a
            real table with real books. We do experiments. We write things down.
            We practice speaking confidently and thinking on our feet. We argue
            about the parsha.
          </p>
          <p>
            Jacksonville is the right place for this. The Orthodox community
            here is real, growing, and warm — and it&apos;s hungry for serious
            learning options that meet the full range of how Jewish children
            grow.
          </p>
          <p>
            If you&apos;re a family considering the pod — or considering
            Jacksonville — I would love to talk.
          </p>
          <div className="rule mt-10" />
          <div className="text-sm text-muted-foreground">
            Jacksonville Jewish Learning Pod is a program of{" "}
            <strong className="text-ink">A Bright Light Education, LLC</strong>{" "}
            (Florida #L25000117403).
          </div>
        </div>
      </section>
    </>
  );
}
