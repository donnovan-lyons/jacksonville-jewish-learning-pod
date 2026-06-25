import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { EnrollForm } from "@/components/enroll-form";

export const metadata: Metadata = {
  title: "Enroll & Inquire",
  description:
    "Inquire about a seat in the Jacksonville Jewish Learning Pod for 2026–2027 — or just say hello.",
  openGraph: {
    title: "Enroll — Jacksonville Jewish Learning Pod",
    description: "Inquire about a seat for 2026–2027.",
  },
};

export default function EnrollPage() {
  return (
    <>
      <PageHeader
        eyebrow="Enroll · 2026–2027"
        title="Six seats. Real learning. Let's talk."
        lede="The pod is small by design. Tell us a little about your family and we'll set up a call — usually within 48 hours."
      />

      <section className="mx-auto max-w-3xl px-6 pb-20 pt-16">
        <EnrollForm />
      </section>
    </>
  );
}
