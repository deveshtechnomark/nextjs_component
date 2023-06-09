/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgColor: "rgba(217, 217, 217, 0.5);",
        textColor: "#333333",
        hoverColor: "#F6F6F6",
        borderColor: "#02B89D",
      },
      screens: {
        sm: "640px",
        md: "1920px",
      },
    },
  },
  plugins: [],
};
