import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";

import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://fatima-guliyeva.vercel.app"),

  title: {
    default: "Fatima Guliyeva | Frontend Developer Portfolio",
    template: "%s | Fatima Guliyeva",
  },

  description:
    "Fatima Guliyeva is a Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web applications.",

  applicationName: "Fatima Guliyeva Portfolio",
  authors: [{ name: "Fatima Guliyeva" }],
  creator: "Fatima Guliyeva",

  alternates: {
    canonical: "https://fatima-guliyeva.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    siteName: "Fatima Guliyeva Portfolio",
    type: "website",
    url: "https://fatima-guliyeva.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fatima Guliyeva Portfolio",
      },
    ],
  },

  verification: {
    google: "tYlhxTltpaGQQGNO_kg5qeboHbXS57ZQNXaFuvwtn4Y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="tYlhxTltpaGQQGNO_kg5qeboHbXS57ZQNXaFuvwtn4Y" />
      </head>

      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368 text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}