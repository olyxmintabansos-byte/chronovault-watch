import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chronovault Watch - Mechanical Tourbillon Timepiece",
  description: "Hand-assembled mechanical tourbillon with 72-hour power reserve and Swiss-certified chronometry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cream text-charcoal">{children}</body>
    </html>
  );
}
