import './globals.css';

export const metadata = {
  title: "Chelsey Tschida's Portfolio",
  description: "Chelsey Tschida's Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="synthwave">
      <body>{children}</body>
    </html>
  );
}
