import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  applicationName: "PRISM",
  appleWebApp: { capable: true, title: "PRISM", statusBarStyle: "default" },
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
      className={`${dmSans.variable} ${sourceSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
