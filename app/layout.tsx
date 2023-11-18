import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Sounds Like Soma",
  description: "Philadelphia's Best Recording Studios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navigation />
        <main className="">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
