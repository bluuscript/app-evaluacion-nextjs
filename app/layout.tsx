import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evaluaciones | GlobalSmart",
  description: "Gestor de Evaluaciones | GlobalSmart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/fav.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
