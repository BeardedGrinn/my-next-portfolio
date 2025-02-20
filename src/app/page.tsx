import Navbar from "@/components/Navbar/navbar";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <body>
        <Navbar />
        {children}
      </body>
  );
}