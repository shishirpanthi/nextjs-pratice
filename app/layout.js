import { Poppins } from "next/font/google"; // Use only Poppins
import "./globals.css";
import Navbar from "../compnents/navbar/Navbar"; // Adjust the import path as needed

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export const metadata = {
  title: {
    default: "My App - Your Digital Solution",
    template: "%s | My App"
  },
  description: "Professional web development services including custom websites, e-commerce solutions, and digital consulting. Contact us for your next project.",
  keywords: ["web development", "next.js", "react", "digital solutions", "custom websites", "e-commerce"],
  authors: [{ name: "My App Team" }],
  creator: "My App",
  publisher: "My App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "My App - Your Digital Solution",
    description: "Professional web development services including custom websites, e-commerce solutions, and digital consulting.",
    url: "/",
    siteName: "My App",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My App - Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My App - Your Digital Solution",
    description: "Professional web development services including custom websites, e-commerce solutions, and digital consulting.",
    images: ["/twitter-image.jpg"],
    creator: "@myapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${poppins.variable} antialiased`}>
        {children}

 
      </body>
    </html>
  );
}
