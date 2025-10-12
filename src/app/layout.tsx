import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from '@/app/components/ui/provider';
import { TopNavBar } from "@/app/components/topnav/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" suppressHydrationWarning={true}>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased` } >
      <div className="h-screen w-screen bg-[radial-gradient(circle_at_center,theme(colors.teal.800),theme(colors.gray.900))]">
        <Provider>
          <div className="font-sans items-center justify-items-center relative h-0">
            <TopNavBar/>
          </div>
          {children}
        </Provider>
      </div>
    </body>
  </html>
  );
}
