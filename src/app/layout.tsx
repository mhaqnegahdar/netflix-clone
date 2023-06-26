import { ChildrenProp } from "@/types";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix",
  description: "Netflix clone",
};

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
