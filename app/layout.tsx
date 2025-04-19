import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";

// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sounds Like Soma - Philadelphia Recording Studios",
  description:
    "Professional audio editing and music mixing services in Philadelphia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
        <Navigation />
        {children}
        <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
