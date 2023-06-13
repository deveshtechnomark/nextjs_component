/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#BCF1E8",
        textColor: "#333333",
        borderColor: "#02B89D",
      },
      screens: {
        sm: "1300px",
        md: "1920px",
      },
    },
  },
  plugins: [],
};
