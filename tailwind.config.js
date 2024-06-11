
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        logo : '#00a859',
      ...colors,
      },
      scale: {
        '-100': '-1',
    },
      fontFamily: {
        fjalla: ['Fjalla One', 'sans-serif'],
        // poppins: ["Poppins", 'serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};