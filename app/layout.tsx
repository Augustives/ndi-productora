import "./globals.css";

import type { Metadata } from "next";
import { Barlow } from "next/font/google";

import Header from "@components/modules/header";
import Footer from "@components/modules/footer";

const inter = Barlow({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NDI Productora",
  description: "NDI Productora Audiovisual",
  authors: [{ name: "SMA Web Developers" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}