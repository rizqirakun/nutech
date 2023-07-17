import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nutech Rizqirakun',
  description: 'Product pages CRUD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`bg-base-100 ${inter.className}`}>
        {children}

        <div className="text-center py-4">
          <a href="https://github.com/rizqirakun/nutech">Github Code</a>
        </div>
      </body>
    </html>
  );
}
