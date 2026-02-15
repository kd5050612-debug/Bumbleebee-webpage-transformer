import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import './globals.css';

export const metadata: Metadata = {
  title: 'Bumblebee | Cinematic Transformation Experience',
  description: 'Experience the legendary transformation from Camaro to Autobot hero in a scroll-driven cinematic showcase.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
