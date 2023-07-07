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
    },
    animation: {
      'pulse-transform': 'pulseTransform 1.5s ease-in-out infinite',
    },
    keyframes: {
      pulseTransform: {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.1)' },
        '100%': { transform: 'scale(1)' },
      },
    },
  },
  variants: {},
  plugins: [],
};
