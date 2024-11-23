import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StariEffect from "@/components/StariEffect";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="My Portfolio" />
        <meta property="og:image" content="/assets/IMG2.JPG" />
      </head>

      <body className={`${jetBrainsMono.variable}`} suppressHydrationWarning>
        <Header />
        <StariEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
