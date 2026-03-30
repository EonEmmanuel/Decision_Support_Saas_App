import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enerlytics AI",
  description: "Energy, CO2, and financial decision support for real estate portfolios"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
