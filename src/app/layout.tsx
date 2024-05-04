'use client'
import { Inter as Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import {metadata} from '@/components/metadata'
import Head from 'next/head';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", '400', '500', '600', "700"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();
  if( pathname === "/login" || pathname === "/signup" || pathname === "/forgot-password" )
  return (
    <html lang="en">
      <body className={cn(inter.variable, 'min-h-screen bg-background antialiased')}>
        {children}
      </body>
    </html>
  );
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={cn(inter.variable, 'min-h-screen bg-background antialiased')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
