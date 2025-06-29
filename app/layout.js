// // /app/layout.js
export const metadata = {
  title: "AI Chart Bot",
  description: "Ask questions, get charts!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
