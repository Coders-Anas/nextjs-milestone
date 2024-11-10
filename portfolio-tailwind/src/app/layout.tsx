import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
const outfit = Outfit({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Muhammad Anas Portfolio",
  description: "Tailwind Portfolio: A portfolio website built with TailwindCSS",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
