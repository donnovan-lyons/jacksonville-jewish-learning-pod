import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jacksonville Jewish Learning Pod",
    template: "%s — Jacksonville Jewish Learning Pod",
  },
  description:
    "A small, rigorous, Torah-rooted home school pod for K–6 families in Jacksonville, Florida.",
  authors: [{ name: "A Bright Light Education, LLC" }],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Jacksonville Jewish Learning Pod",
    description:
      "Classical learning, hands-on discovery, and a warm Jewish home for K–6 families in Jacksonville, FL.",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacksonville Jewish Learning Pod",
    description:
      "Classical learning, hands-on discovery, and a warm Jewish home for K–6 families in Jacksonville, FL.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${workSans.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
