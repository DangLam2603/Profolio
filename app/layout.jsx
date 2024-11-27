/* eslint-disable react/no-unescaped-entities */
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StariEffect from "@/components/StariEffect";
import { Analytics } from "@vercel/analytics/react";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dang's Profolio</title>
        <meta name="description" content="Your website description" />
        <meta property="og:title" content="My Portfolio" />
        <meta property="og:image" content="/assets/thumb.jpg" />
        <meta property="og:type" content="website" />
      </head>

      <body className={`${jetBrainsMono.variable}`} suppressHydrationWarning>
        <Header />
        <StariEffect />
        <PageTransition>
          {children}
          <Analytics />
        </PageTransition>
      </body>
    </html>
  );
}
