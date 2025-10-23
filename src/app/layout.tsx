import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from '@/app/components/ui/provider';
import { TopNavBar } from "@/app/components/topnav/navbar";
//import { Contact } from "@/app/components/contact/contact";
//import { ColorModeButton } from "@/app/components/ui/color-mode";
import { ProfilePicture } from "@/app/components/ppic/ppic";

export const metadata: Metadata = {
	title: 'Nicholas Strange Portfolio',
	description: 'A Portfolio for Nicholas Strange, Devops Engineer',
	metadataBase: new URL('http://localhost:3000'),
};

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
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark` } >
      <div className="h-screen w-screen bg-[radial-gradient(circle_at_center,theme(colors.teal.800),theme(colors.gray.900))] relative overflow-y-auto dark">
        <Provider defaultTheme="dark" forcedTheme="dark">
	<div className="font-sans h-0 w-23 h-10">
            {/*<ColorModeButton />*/}
	</div>
	<div className="w-screen h-100 grid justify-items-center items-end dark">
		<div className="flex items-center gap-5 h-80 grid-row:1 dark">
				<ProfilePicture />
      <div className="transform -translate-y-5">
				<TopNavBar />
      </div>
		</div>
	</div>
	  <div className="relative dark">
          {children}
          </div>
        </Provider>
      </div>
    </body>
  </html>
  );
}
