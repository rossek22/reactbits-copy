import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ReactBits Skeed",
    template: "%s | ReactBits Skeed",
  },
  description:
    "ReactBits Skeed is a landing page for developers who want to build memorable products faster.",
  keywords: [
    "ReactBits",
    "Skeed",
    "developer tools",
    "product design",
    "landing page",
  ],
  openGraph: {
    title: "ReactBits Skeed",
    description:
      "Build memorable products faster with a polished ReactBits-style experience.",
    siteName: "ReactBits Skeed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReactBits Skeed",
    description:
      "Build memorable products faster with a polished ReactBits-style experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
