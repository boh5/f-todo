import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F todo",
  description: "fluent todo list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
