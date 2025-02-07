import "./globals.css";
import { montserrat } from "./lib/fonts";

export const metadata = {
  title: "SHAH SAMIN YASAR - MERN Stack Developer",
  description:
    "Portfolio of Shah Samin Yasar - a 19 years old full stack developer based in Sylhet, Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
