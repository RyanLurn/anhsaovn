import type { Metadata } from "next";

import { Geist_Mono, Geist } from "next/font/google";

import "@/app/globals.css";
import { ModeToggle } from "@/components/utils/mode-toggle";
import { AppProviders } from "@/components/providers/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Công ty Ánh Sao Việt Nam - Dịch vụ làm web và quảng cáo online",
  title: "Ánh Sao Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders>
          {children}
          <ModeToggle className="fixed top-3 right-3 z-50" />
        </AppProviders>
      </body>
    </html>
  );
}
