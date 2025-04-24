import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Load the Inter font with Latin subset
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Define metadata for the application
export const metadata: Metadata = {
  title: 'Next.js App Router Demo',
  description: 'A small demo application using Next.js App Router',
  keywords: ['Next.js', 'React', 'App Router', 'SSR', 'TypeScript'],
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}