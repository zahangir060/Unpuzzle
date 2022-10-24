/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'blue': '#1CABF2',
          'black': {
            50: '#00000080',
            60: '#00000099',
            80: '#000000CC',
            100: '#000000'
          },
          'yellow': '#F9993A',
          'grey': '#808080',
          'green': '#36CC7B'
        },
        fontFamily: {
          'patuaOne': ['patua-one', 'regular'],
          'poppins': ['Poppins']
        },
        fontWeight: {
          'regualr': 400,
          'bold': 700
        },
        fontSize: {
          lg: '48px',
          sm: '20px'
        }
    },
  },
  plugins: [],
}
