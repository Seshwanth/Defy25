import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import {Navbar} from "@/components";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Realty",
  description: "Revolutionize Real Estate with Web3 Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        {/* <Navbar /> */}
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
