// Styles
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//Types
import { ChildrenProp } from "@/types/props";

// Components
import InnerProviders from "@/components/providers/InnerProviders";
import OuterProviders from "@/components/providers/OuterProviders";

export const metadata = {
  title: "Netflix",
  description: "Netflix clone",
};

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <OuterProviders>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          {children}
          <InnerProviders />
        </body>
      </html>
    </OuterProviders>
  );
}
