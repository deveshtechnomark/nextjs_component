/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      proxima: ['Proxima Nova'],
    }
  },
  plugins: [],
}