/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./application/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./application/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./application/**/*.{js,ts,jsx,tsx,mdx}",
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
