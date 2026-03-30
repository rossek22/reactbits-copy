import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
});

const THEME_STORAGE_KEY = "theme";
const THEME_COOKIE_KEY = "theme";

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
  colorScheme: "dark light",
};

const themeScript = `
(() => {
  const storageKey = "${THEME_STORAGE_KEY}";
  const root = document.documentElement;
  const stored = localStorage.getItem(storageKey);
  const mode =
    stored === "light" || stored === "dark" || stored === "system"
      ? stored
      : "dark";
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolvedTheme =
    mode === "system" ? (systemDark ? "dark" : "light") : mode;

  root.dataset.themeMode = mode;
  root.classList.toggle("dark", resolvedTheme === "dark");
  root.classList.toggle("light", resolvedTheme === "light");
  root.style.colorScheme = resolvedTheme;
})();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeMode = cookieStore.get(THEME_COOKIE_KEY)?.value;
  const initialThemeClass =
    themeMode === "light" ? "light" : themeMode === "dark" ? "dark" : "";

  return (
    <html
      lang="en"
      className={`${raleway.variable} h-full antialiased ${initialThemeClass}`.trim()}
      data-theme-mode={themeMode === "light" || themeMode === "dark" || themeMode === "system" ? themeMode : "dark"}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
