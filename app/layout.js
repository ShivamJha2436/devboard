import "./globals.css";

export const metadata = {
  title: "DevBoard",
  description: "A developer productivity dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
