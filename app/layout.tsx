import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "My Portfolio",
  authors: {
    name: "Yash",
  },

  description:
    "Based in Nagpur, Maharashtra, I am a frontend developer passionate about crafting modern web applications that users adore.",
  openGraph: {
    title: "My Portfolio",
    description:
      "Based in Nagpur, Maharashtra, I am a frontend developer passionate about crafting modern web applications that users adore.",
    url: "http://localhost:3000",
    siteName: "My Portfolio",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "Yash", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider></body>
    </html>
  );
}
