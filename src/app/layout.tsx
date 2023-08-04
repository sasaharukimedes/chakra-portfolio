// import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// app/layout.tsx
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harukimedes's Portfolio",
  description: "Created by Next.js & ChakraUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
