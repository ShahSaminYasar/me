/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "1rem",
      },
      colors: {
        "primary-shade": "#6F00C7",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bashaLagbe: {
          "base-100": "#1c1c1c",
          bg: "#000000",
          fg: "#FFFFFF",
          primary: "#3F0071",
          secondary: "#150050",
          accent: "#FB2576",
          success: "#36FF04",
          error: "#b01717",
          warning: "#e8c100",
        },
      },
    ],
  },
};
