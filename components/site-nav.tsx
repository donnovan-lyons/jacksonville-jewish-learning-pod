"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/app/assets/bright-light-mark.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/program", label: "The Program" },
  { href: "/schedule", label: "Sample Schedule" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/community", label: "Jacksonville" },
  { href: "/about", label: "About Felicia" },
  { href: "/enroll", label: "Enroll" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src={logo}
            alt="A Bright Light Education"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-ink">
              Jacksonville Jewish Learning Pod
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              A Bright Light Education Program
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-ochre ${
                pathname === l.href ? "text-ochre" : "text-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded border border-border px-3 py-1.5 text-sm lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-paper lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-base ${
                  pathname === l.href ? "text-ochre" : "text-foreground/90"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
