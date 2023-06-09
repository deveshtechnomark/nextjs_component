/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgba(2, 184, 157, 1)',
        customGrey : 'rgba(110, 109, 122, 1)'
      },
    },
  },
  plugins: [],
}

