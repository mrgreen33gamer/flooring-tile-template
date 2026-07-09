import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Heritage Flooring & Tile Co.",
  description: "How we collect, use, and protect your information at Heritage Flooring & Tile Co. in Waco, TX.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}