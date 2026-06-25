import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/bright-light-mark.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="A Bright Light Education"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div className="font-display text-xl text-ink">
              Jacksonville Jewish Learning Pod
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A small, rigorous, Torah-rooted home school pod in Jacksonville,
            Florida. Classical learning, hands-on discovery, and a warm Jewish
            home for every child.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Visit
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/program" className="hover:text-ochre">
                The Program
              </Link>
            </li>
            <li>
              <Link href="/schedule" className="hover:text-ochre">
                Sample Weekly Schedule
              </Link>
            </li>
            <li>
              <Link href="/philosophy" className="hover:text-ochre">
                Teaching Philosophy
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-ochre">
                Moving to Jacksonville
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:support@abrightlightedu.com"
                className="hover:text-ochre"
              >
                support@abrightlightedu.com
              </a>
            </li>
            <li className="text-muted-foreground">Jacksonville, FL</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} A Bright Light Education, LLC. All
            rights reserved.
          </div>
          <div className="font-display italic">
            &ldquo;Teach a child according to his way.&rdquo; — Mishlei 22:6
          </div>
        </div>
      </div>
    </footer>
  );
}
