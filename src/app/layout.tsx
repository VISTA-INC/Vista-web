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
  title: "VISTA | PRISM voice-driven data assistant for mixed reality",
  description:
    "VISTA builds spatial computing tools that turn complex data into conversations and touchable 3D visualizations. Our product PRISM is a mixed-reality data assistant for Meta Quest.",
  keywords: [
    "VISTA",
    "PRISM",
    "mixed reality",
    "data visualization",
    "Meta Quest",
    "spatial computing",
    "3D data",
    "voice assistant",
    "AR",
    "MR",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
