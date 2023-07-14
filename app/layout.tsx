import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health INC.",
  description:
    "Registered in the state of Jammu and Kashmir, HEALTH Inc is a membership-run NGO operating in Ladakh since 1992. Our Mission is providing access to the skills and knowledge that help people make informed decisions about their future. We work in conjunction with partner non-profits in India, USA, Canada and the UK. And we work in full collaboration with government departments serving our member's home villages. We have no paid staff. No vehicle. Very low overhead costs. When our members want change in their village or their service area, they create a project and solicit local support to make it happen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
        rel="stylesheet"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
