import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeToggle from "@/components/misc/ThemeToggle";
import { Toaster } from "react-hot-toast";

const satoshiVariable = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NPFL",
  description: "Website for NP Fantasy League",
  icons: '/images/logo.png'
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
          <Toaster />
          {children}
      </body>
    </html>
  );
}
