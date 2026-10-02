import type { Metadata } from "next";
import { Playfair_Display, Lora, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const caslonDisplay = Playfair_Display({
  variable: "--font-caslon-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const caslonText = Lora({
  variable: "--font-caslon-text",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const franklinGothic = Source_Sans_3({
  variable: "--font-franklin-gothic",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ankan Mondal — Web Developer, Kolkata",
  description: "Ankan Mondal — Kolkata web developer. Building things front to back with Next.js, Tailwind and Supabase.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${caslonDisplay.variable} ${caslonText.variable} ${franklinGothic.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
