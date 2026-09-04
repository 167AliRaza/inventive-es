import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventive Engineering Solution | Under Maintenance",
  description: "Inventive Engineering Solution - We are currently under maintenance. Please check back later.",
  openGraph: {
    title: "Inventive Engineering Solution",
    description: "Inventive Engineering Solution - We are currently under maintenance.",
    url: "https://inventive-es.com",
    siteName: "Inventive Engineering Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventive Engineering Solution",
    description: "We are currently under maintenance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
