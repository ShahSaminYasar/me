import "./globals.css";
import { montserrat } from "./lib/fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "SHAH SAMIN YASAR - MERN Stack Developer",
  description:
    "Portfolio of Shah Samin Yasar - a full stack developer based in Sylhet, Bangladesh",
  icons: "/favicon.png",
  keywords: [
    "shah samin yasar",
    "mern stack developer",
    "software engineer",
    "developer",
    "web developer",
    "portfolio",
    "samin",
    "samin's portfolio",
    "yasar",
    "basha lagbe",
    "tasks align",
    "webio",
    "web developer in bd",
  ],
  robots: "index, follow",
  authors: [{ name: "Shah Samin Yasar" }],
  metadataBase: new URL("https://shahsaminyasar.vercel.app"),
  openGraph: {
    title: "SHAH SAMIN YASAR - MERN Stack Developer",
    description:
      "Portfolio of Shah Samin Yasar - a full stack developer based in Sylhet, Bangladesh",
    url: "https://shahsaminyasar.vercel.app",
    siteName: "Shah Samin Yasar's Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shah Samin Yasar - MERN Stack Developer",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased relative`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
