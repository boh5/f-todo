import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="dark:bg-zinc-900 bg-gray-100 text-black dark:text-white">
          <div className="p-4 h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
