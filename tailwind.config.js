/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#14213D',
        'softBlue': '#2E4163',
        'orange': '#FCA311',
        'white': '#fff',
      },
      boxShadow: {
        'custom': '6px 5px 6px #2E4163, -6px -5px 6px #FCA311',
      },
    },
  },
  variants: {},
  plugins: [],
};
