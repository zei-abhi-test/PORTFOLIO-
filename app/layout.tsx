import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishek-bk.dev"),
  title: {
    default: "Abhishek BK - Software Product Engineering Student",
    template: "%s - Abhishek BK",
  },
  description:
    "Abhishek BK builds AI products, full stack applications, and developer tools.",
  keywords: [
    "Abhishek BK",
    "AI Products",
    "Full Stack Developer",
    "Developer Tools",
    "Software Product Engineering",
  ],
  authors: [{ name: "Abhishek BK" }],
  creator: "Abhishek BK",
  openGraph: {
    title: "Abhishek BK - Software Product Engineering Student",
    description:
      "Building AI Products, Full Stack Applications and Developer Tools.",
    url: "https://abhishek-bk.dev",
    siteName: "Abhishek BK",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek BK",
    description:
      "Building AI Products, Full Stack Applications and Developer Tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}



