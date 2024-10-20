import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abderrahman Aamri",
  description: "Website About Abderrahman Aamri",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/black_name.svg",
        href: "/logo-black.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-white.svg",
        href: "/logo-white.svg"
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
