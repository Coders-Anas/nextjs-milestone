import type { Metadata } from "next";
import localFont, { Outfit } from "next/font/google";
import "./globals.css";
const outfit = Outfit()

export const metadata: Metadata = {
  title: "Milestone 1",
  description: "Milestone 1: Installation & Hello World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
