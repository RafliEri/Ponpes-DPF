
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        logo : '#00a859',
        primary: '#FFB6C1', 
        secondary: '#FFE4E1',
        accent: '#FF69B4',
        close: '#E82900',
      ...colors,
      }, 
      scale: {
        '-100': '-1',
    },
      fontFamily: {
        fjalla: ['Fjalla One', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('../public/image/bg.png')",
      },
      animation: {
        border: 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};