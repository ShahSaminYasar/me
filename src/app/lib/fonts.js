import { Montserrat, Fira_Code, Indie_Flower } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const firaCode = Fira_Code({
  subsets: ["greek"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const indieFlower = Indie_Flower({
  subsets: ["latin"],
  display: "auto",
  weight: ["400"],
});
