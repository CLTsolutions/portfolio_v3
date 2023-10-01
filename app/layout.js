import './globals.css';

export const metadata = {
  title: "Chelsey Tschida's Portfolio",
  description: "Chelsey Tschida's Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className="prose mx-auto my-10 w-full px-5 md:px-0">
        {children}
      </body>
    </html>
  );
}
