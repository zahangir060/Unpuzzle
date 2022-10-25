const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1CABF2',
        'black': {
          10: '#0000001A',
          30: '#0000004D',
          50: '#00000080',
          60: '#00000099',
          80: '#000000CC',
          70: '#000000B2',
          100: '#000000',
          'cardBG': '#F9F9F9'
        },
        'orange': {
          30: '#FFD8CB4D'
        },
        'yellow': '#F9993A',
        'grey': '#808080',
        'green': '#36CC7B',
        'lightgrey': '#EBEBEB',
        'puzzlebg': '#F9F9F9'
      },
      fontFamily: {
        'patuaOne': ['patua-one', 'regular'],
        'poppins': ['Poppins']
      },
      fontWeight: {
        'regular': 400,
        'bold': 700
      },
      fontSize: {
        lg: '48px',
        md: '24px',
        sm: '20px',
        xs: '16px'
      }
    },
  },
  plugins: [],
}
