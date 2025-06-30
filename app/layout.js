import './globals.css';

export const metadata = {
  title: "AI Chart Bot",
  description: "Ask questions, get charts!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans m-0 p-0">{children}</body>
    </html>
  );
}
