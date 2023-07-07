/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      proxima: ['Proxima Nova'],
    },
    extend: {
      colors: {
        primary: "#02B89D",
        textColor: "#333333",
        lightSilver: '#D8D8D8',
        lightGreen: '#E6F8F6',
        whiteSmoke: "#F6F6F6",
        slatyBlue: '#0F2552',
        darkGray: '#848a95'
      },
    },
  },
  plugins: [],
}

