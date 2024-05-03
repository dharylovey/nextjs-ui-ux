import type { Metadata } from "next";
import { Inknut_Antiqua as Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", '400', '500', '600', "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Next Js UI/UX",
  description: "Created by Dharyl using Next Js App Router",
  authors: {
    name: "Dharyl",
    url: "https://dharyl.dev",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, 'min-h-screen bg-background antialiased')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
