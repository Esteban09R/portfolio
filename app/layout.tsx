import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

import { PROFILE } from "@/constants/profile";

export const metadata: Metadata = {
  title: PROFILE.name,
  description: "Desarrollador Fullstack",
  icons: {
    icon: "/dan.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased text-[1rem]`}>
        {children}
      </body>
    </html>
  );
}
