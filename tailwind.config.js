/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        custom: "0px 5px 6px 3px #FCA311, 0px -5px 6px 3px #FCA311",
      },
      backgroundImage: {
        camerasBg: "url('../public/background_cameras.jpeg')",
      },
    },
  },
  plugins: [],
};
