import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ClientProvider from "@/components/ClientProvider";
import { SideBar } from "@/components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
    <html lang="en">
      <body
        className={`bg-background font-poppins`}
        >
{/* desktop */}
          <div className="mdsm:flex hidden">
        <SideBar/>
        <div className="w-full">
        <Header/>
        {children}
        </div>
          </div>



          {/* mobile */}
          <div className="mdsm:hidden py-0">
          <Header/>
          <SideBar/>
        {children}
          </div>
      </body>
    </html>
        </ClientProvider>
  );
}
