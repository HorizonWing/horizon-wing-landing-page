import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "HorizonWing - Landing Page",
  description: "Horizon Wing Landing Page",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={cn(GeistSans.variable, "scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100")}>
      <body>{children}</body>
    </html>
  );
}
