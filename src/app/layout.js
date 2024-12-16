import localFont from "next/font/local";
import "./globals.css";
import { NextAuthProvider } from "../providers/nextAuth-provider";
import ThemeProvider from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/Gilroy-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Gilroy-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Gilroy-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Gilroy-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Gilroy-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--Gilroy",
});

export const metadata = {
  title: "Taskify",
  description: "Taskify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${gilroy.variable} font-Gilroy`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* <NextAuthProvider> */}
          {children}
          {/* </NextAuthProvider> */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html >
  );
}
