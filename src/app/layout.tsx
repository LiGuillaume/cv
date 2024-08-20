import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          defer
          data-domain="guli.io"
          src="http://plausible-w0s0g44osc84gkcokss40ok4.193.203.190.150.sslip.io/js/script.js"
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>

  );
}
