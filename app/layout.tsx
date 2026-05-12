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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.style.visibility = 'hidden';
                window.addEventListener('DOMContentLoaded', function() {
                  document.documentElement.style.visibility = 'visible';
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased text-[1rem]`}>
        {children}
        <div className="bg-grid fixed top-0 right-0 w-full h-full -z-50"></div>
      </body>
    </html>
  );
}
