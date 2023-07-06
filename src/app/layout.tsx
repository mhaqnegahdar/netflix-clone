import { ChildrenProp } from "@/types/props";
import "./globals.css";
import { Inter } from "next/font/google";
import InnerProviders from "@/components/providers/InnerProviders";
import OuterProviders from "@/components/providers/OuterProviders";
import NavBar from "@/components/common/layout/header/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix",
  description: "Netflix clone",
};

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <OuterProviders>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <NavBar />
          {children}
          <InnerProviders />
        </body>
      </html>
    </OuterProviders>
  );
}
