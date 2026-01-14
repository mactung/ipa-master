import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPA Master",
  description: "Master English Pronunciation",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0", // Mobile optimization
};

import { SettingsProvider } from "@/context/SettingsContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-white text-slate-800 antialiased`}>
        <div className="mx-auto max-w-md min-h-screen bg-white shadow-2xl overflow-hidden relative">
          <SettingsProvider>
            {children}
          </SettingsProvider>
        </div>
      </body>
    </html>
  );
}
