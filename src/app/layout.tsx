import type { Metadata, Viewport } from "next";
// Fonts are bundled (not fetched from Google at build time) so Vercel builds never depend on Google's font service.
import "@fontsource-variable/big-shoulders-display";
import "@fontsource-variable/geist/wght.css";
import "@fontsource-variable/geist-mono/wght.css";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soccer4Everyone · Sunday-league football that funds young talent",
  description:
    "Soccer4Everyone runs Sunday-league tournaments in Surat, India and turns entry fees and sponsorships into pro gear and coaching for 9 to 14 year-old footballers. $65K raised, 450+ athletes, 71 signed to pro clubs, 11 at national tryouts.",
  openGraph: {
    title: "Soccer4Everyone",
    description: "$65K raised. 450+ young athletes kitted and coached. 71 signed to pro clubs.",
    images: ["/img/squad-ball.webp"],
  },
};

export const viewport: Viewport = { themeColor: "#0b1611" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Nav />
        {children}
      </body>
    </html>
  );
}
