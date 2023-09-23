import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Chelsey Tschida's Portfolio",
  description: "Chelsey Tschida's Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
