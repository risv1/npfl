import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeToggle from "@/components/misc/ThemeToggle";

const satoshiVariable = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NPFL",
  description: "Website for NP Fantasy League",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshiVariable.className} antialiased bg-white dark:bg-black`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
