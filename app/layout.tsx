import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job List",
  description:
    "This is the job list platform, where you can find any kind of jobs from world wild",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EdgeStoreProvider>
          <Navbar />
          {children}
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
