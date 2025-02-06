import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "背景の色からボカロ曲を当てるゲーム",
  description: "背景の色からボカロ曲を当てよう！",
  openGraph: {
    siteName: "vocolor.vercel.app",
    title: "背景の色からボカロ曲を当てるゲーム",
    description: "背景の色からボカロ曲を当てよう！",
    images: [
      {
        url: "https://vocolor.vercel.app/card.png",
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "背景の色からボカロ曲を当てるゲーム",
    description: "背景の色からボカロ曲を当てよう！",
    images: ["https://vocolor.vercel.app/card.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google" content="notranslate" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
