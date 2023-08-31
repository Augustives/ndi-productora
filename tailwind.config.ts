import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      custom: ["Barlow", "sans-serif"],
    },
    extend: {
      colors: {
        darkBlue: "#13213C",
        softBlue: "#2E4163",
        orange: "#FCA311",
        white: "#fff",
      },
      boxShadow: {
        custom: " 0px 1px 2px 0px #FCA311, 0px 2px 6px 2px #FCA311",
      },
      backgroundImage: {
        camerasBg: "url('../public/background_cameras.jpeg')",
      },
    },
  },
  plugins: [],
};
export default config;
