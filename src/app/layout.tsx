import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Navigation from "@/layout/Navigation";

const Dana = localFont({
  src: [
    { path: "./font/DanaVF.ttf" },
    { path: "./font/DanaVF.woff2" },
    { path: "./font/DanaVF.woff" },
  ],
});

export const metadata: Metadata = {
  title: "GymBro | جیم برو",
  description: "پلتفرم ساخت برنامه ورزشی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={Dana.className} lang="fa">
      <body className="flex flex-col w-full h-full overflow-x-hidden">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
