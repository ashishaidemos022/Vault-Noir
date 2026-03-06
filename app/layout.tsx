import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { TalkdeskWidgetLoader } from "@/components/TalkdeskWidgetLoader";

export const metadata: Metadata = {
  title: "VAULT NOIR",
  description: "Tailored for the nocturne. Ultra modern luxury apparel for men and women.",
  openGraph: {
    title: "VAULT NOIR",
    description: "Tailored for the nocturne.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bone-50 text-noir-900">
        <Nav />
        {children}
        <Footer />
        <TalkdeskWidgetLoader />
      </body>
    </html>
  );
}
